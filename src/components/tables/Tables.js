import PersonsTable from './PersonsTable';

export default function Tables(props) {
  return (
    <div>
      { !props.isTeamsReady
        ? <PersonsTable persons={props.persons} name={null} /> 
        : <div className='d-flex'>
            <PersonsTable persons={props.teamA} name={'A'} />
            <PersonsTable persons={props.teamB} name={'B'} />
          </div>
      }
    </div>
  );
}