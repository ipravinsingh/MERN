import React, { useRef, useState } from "react";

function UserForm() {
  // const [name, setName] = useState("");
  // const [fruit, setFruit] = useState("");

  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);

  function handelSubmit(event) {
    event.preventDefault();
    console.log("Print Something");
    const nameInputValue = nameInputRef.current.value;
    const fruitValue = fruitSelectRef.current.value;
    alert(nameInputValue + fruitValue);
  }

  function handleChange(e) {
    // alert(e.target.value);
  }

  return (
    <form onSubmit={handelSubmit} style={{ padding: "20px", margin: "20px" }}>
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={(event)=>{setName(event.target.name)}} /> */}
      <input type="text" ref={nameInputRef} />
      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <button onClick={handelSubmit}>Button</button>
    </form>
  );
}

export default UserForm;
