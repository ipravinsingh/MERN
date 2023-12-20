import React, { useState } from "react";

function Child1(props) {
  const [countInChild1, setCountInChild1] = useState(0);

  function updateCountInChild1() {
    setCountInChild1(countInChild1 + 1);
    props.onCountUpdate(countInChild1 + 1);
  }

  return (
    <div> 
      <p>Inside in Child 1 : {countInChild1}</p>
      <button type="submit" onClick={updateCountInChild1}>
        Submit
      </button>
    </div>
  );
}

export default Child1;
