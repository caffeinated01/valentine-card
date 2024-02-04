function Gif(props) {
  return (
    <>
      <img src={props.gif} alt="Bear Gif" />
      <h1>{props.text}</h1>
    </>
  );
}

export default Gif;
