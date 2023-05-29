import Buttons from './Buttons';

const Calculator = () => (
  <>
    <div className="calculator">
      <div className="display-result">0</div>
      <div className="group-btns">
        <div className="body">
          <div className="d-grid template-columns numbers">
            <Buttons name="AC" />
            <Buttons name="+/-" />
            <Buttons name="%" />
            <Buttons name="7" />
            <Buttons name="8" />
            <Buttons name="9" />
            <Buttons name="4" />
            <Buttons name="5" />
            <Buttons name="6" />
            <Buttons name="1" />
            <Buttons name="2" />
            <Buttons name="3" />
            <Buttons name="0" twoColumn="zero" />
            <Buttons name="." />
          </div>
        </div>
        <div className="d-grid operators-right">
          <Buttons name="+" />
          <Buttons name="*" />
          <Buttons name="-" />
          <Buttons name="/" />
          <Buttons name="=" />
        </div>
      </div>
    </div>
  </>
);

export default Calculator;
