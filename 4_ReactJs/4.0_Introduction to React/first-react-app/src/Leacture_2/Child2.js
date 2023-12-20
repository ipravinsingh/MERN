import React from "react";

function Child2(props) {
  const showPrivateData = false;
  return (
    <div>
      <div>
        {showPrivateData ? <p>This is Private : 9394dhdhjej</p> : <></>}
        {showPrivateData && <p>This is Private : 9394dhdhjej</p>}
      </div>
      <p>Inside the Child 2 : {props.countFromParent}</p>
      <button onClick={props.uploadData}>Child2</button>
    </div>
  );
}

export default Child2;
