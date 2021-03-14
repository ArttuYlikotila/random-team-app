import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Spinner from './Spinner';
import Header from './Header';
import Controls from './controls/Controls';
import Tables from './tables/Tables';
import { makeTeams } from '../helpers/helperFunctions';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [isTeamsReady, setIsTeamsReady] = useState(false);

  // Load 20 random person profiles from Random User API on first render
  useEffect(() => {
    setIsLoading(true);
    let mounted = true;

    axios.get('https://randomuser.me/api/', {params: {'results': 20}})
      .then(result => {
        if (mounted) {
          setPersons(result.data.results);
        }
      })
      .catch(error => {
        setError(error);
      })
      .then(() => {
        setIsLoading(false);
      })
    
    return () => {
      mounted = false;
    }
  }, []);

  // Build the teams and set the states of the app
  function toggleTeams() {
    const [firstTeam, secondTeam] = makeTeams(persons);

    setTeamA(firstTeam);
    setTeamB(secondTeam);

    setIsTeamsReady(true);
  }

  return (
    <div className="App" data-testid='App'>
      <Header />
      { error && <div>Error!</div> }
      { isLoading 
        ? <Spinner /> 
        : (!error
          ? <div className='wrapper'>
              <Controls toggleTeams={toggleTeams} isTeamsReady={isTeamsReady} setIsTeamsReady={setIsTeamsReady} teamA={teamA} />
              <Tables isTeamsReady={isTeamsReady} persons={persons} teamA={teamA} teamB={teamB} />
            </div>
          : null )
      }
    </div>
  );
}
