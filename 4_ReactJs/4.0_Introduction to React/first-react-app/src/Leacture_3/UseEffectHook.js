import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function callThisonUnmount() {
    console.log("Unmount here");
  }

  useEffect(() => {
    console.log("First time mounted");
  }, []);

  useEffect(() => {
    console.log(counter, "Counter updated");
    return callThisonUnmount;
  }, [counter]);

  useEffect(() => {
    console.log(name, "name updated");
  }, [name]);

  useEffect(() => {
    console.log("Always updated");
  });

  return (
    <div>
      <p>{counter}</p>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffectHook;
