import "./Counter.css";
import { useState } from "react";
function Counter() {
  let [state, setState] = useState(0);
  let [name, setName] = useState("Folks");

  function increaseCount() {
    setState(state + 1);
    setName("Divya");
    console.log(state);
  }
  return (
    <div className="counter">
      <h2>
        {name} is increasing the Count Value {state}
      </h2>

      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
