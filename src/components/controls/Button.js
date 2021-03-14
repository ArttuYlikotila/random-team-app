export default function Button(props) {
  return (
    <button type='button' className='btn btn-dark' onClick={() => props.callFunc(props.param)}>
      {props.text}
    </button>
  );
}