import './PopUpTwo.css'

const PopUpTwo = (props) => {

  const enteredInput = (event) => {
    event.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup__box">
      <button className="popup__close" onClick={props.handleClose}>CLOSE</button>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default PopUpTwo;