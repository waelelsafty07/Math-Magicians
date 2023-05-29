const ButtonsCalc = ({ name, twoColumn }) => (
  <button
    className={`d-flex justify-center align-center ${twoColumn ? 'zero' : ''}`}
    type="button"
    name={name}
  >
    {name}
  </button>
);

export default ButtonsCalc;
