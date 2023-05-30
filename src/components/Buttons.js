const ButtonsCalc = ({ name, twoColumn, clickHandler }) => (
  <button
    className={`d-flex justify-center align-center ${twoColumn ? 'zero' : ''}`}
    type="button"
    name={name}
    onClick={clickHandler}
  >
    {name}
  </button>
);

export default ButtonsCalc;
