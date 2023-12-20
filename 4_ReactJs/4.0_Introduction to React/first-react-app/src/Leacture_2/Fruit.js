import React, { useState } from "react";
function Fruit() {
  const [fruit, setFruit] = useState("Apple");
  function updateMango(fruit) {
    setFruit(fruit);
  }
  function updateBanana() {
    setFruit("Banana");
  }
  return (
    <div>
      <p>The value of Fruits is : {fruit}</p>
      <button
        onClick={() => {
          setFruit("Papaya");
        }}
      >
        Papaya
      </button>
      <button
        onClick={() => {
          updateMango("Mango");
        }}
      >
        Mango
      </button>
      <button onClick={updateBanana}>Banana</button>
    </div>
  );
}
export default Fruit;

// import React, { useState } from "react";
// function Fruit() {
//   const [fruit, setFruit] = useState("Fruit Name");
//   const [inputtext, setInputText] = useState("");
//   return (
//     <div>
//       <p>The value of fruit will be : {fruit} </p>
//       <input
//         type="text"
//         onChange={(event) => {
//           setInputText(event.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <button onClick={() => setFruit(inputtext)}>Submit</button>
//     </div>
//   );
// }
// export default Fruit;


