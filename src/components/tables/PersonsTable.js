import './PersonsTable.css';

export default function PersonsTable(props) {
  const people = props.persons.map((person) => {
    return (
      <tr key={person.email}>
        <td>{person.name.first}</td>
        <td>{person.name.last}</td>
      </tr>
    );
  })

  return (
    <div className='container mt-2'>
      { props.name? <h4>Team {props.name}</h4> : null }
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          { people }
        </tbody>
      </table>
    </div>
  );
}