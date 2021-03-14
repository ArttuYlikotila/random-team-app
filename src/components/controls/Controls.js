import Button from './Button';
import './Controls.css';

export default function Controls(props) {
  return (
    <div className='mb-2'>
      <Button callFunc={props.toggleTeams} text={'Create random teams'} />
      { props.isTeamsReady
        ? <Button callFunc={props.setIsTeamsReady} param={false} text={'Show list of persons'} />
        : null
      }
      { props.teamA.length > 0 && !props.isTeamsReady
        ? <Button callFunc={props.setIsTeamsReady} param={true} text={'Show current teams'} />
        : null
      }
    </div>
  );
}