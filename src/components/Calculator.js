import { useState } from 'react';
import calculate from '../logic/Calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [state, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });
  const { next, operation, total } = state;
  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  return (
    <div className="d-flex d-space-around page-calculator">
      <div>
        <h1>Let&lsquo;s Do something!</h1>
      </div>
      <div className="calculator">
        <div className="display-result">{next || operation || total || 0}</div>
        <div className="group-btns">
          <div className="body">
            <div className="d-grid template-columns numbers">
              <Buttons clickHandler={clickHandler} name="AC" />
              <Buttons clickHandler={clickHandler} name="+/-" />
              <Buttons clickHandler={clickHandler} name="%" />
              <Buttons clickHandler={clickHandler} name="7" />
              <Buttons clickHandler={clickHandler} name="8" />
              <Buttons clickHandler={clickHandler} name="9" />
              <Buttons clickHandler={clickHandler} name="4" />
              <Buttons clickHandler={clickHandler} name="5" />
              <Buttons clickHandler={clickHandler} name="6" />
              <Buttons clickHandler={clickHandler} name="1" />
              <Buttons clickHandler={clickHandler} name="2" />
              <Buttons clickHandler={clickHandler} name="3" />
              <Buttons clickHandler={clickHandler} name="0" twoColumn="zero" />
              <Buttons clickHandler={clickHandler} name="." />
            </div>
          </div>
          <div className="d-grid operators-right">
            <Buttons clickHandler={clickHandler} name="+" />
            <Buttons clickHandler={clickHandler} name="*" />
            <Buttons clickHandler={clickHandler} name="-" />
            <Buttons clickHandler={clickHandler} name="/" />
            <Buttons clickHandler={clickHandler} name="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
