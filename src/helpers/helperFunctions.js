// Create two random teams with team sizes defined by the second input parameter, default is even teams
export function makeTeams(persons, firstTeamSize = persons.length / 2) {
   // Make a deep copy of the persons array
  const personsCopy = JSON.parse(JSON.stringify(persons));
  // Randomize the order of copy array
  personsCopy.sort((a,b) => 0.5 - Math.random());
  
  let counter = 0;
  let firstTeam = [];
  let secondTeam = [];

  // Assing persons to their teams
  personsCopy.forEach((person) => {
    if (counter < firstTeamSize) {
      firstTeam.push(person);
      counter++;
    }
    else {
      secondTeam.push(person);
    }
  });

  return [firstTeam, secondTeam];
}