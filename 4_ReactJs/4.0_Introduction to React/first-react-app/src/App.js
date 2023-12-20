import "./index.css";
import { useState } from "react";
import Avator from "./Leacture_1/Avator";
import Card from "./Leacture_1/Card";

import Counter from "./Leacture_2/Counter";
import Fruit from "./Leacture_2/Fruit";
import Notes from "./Leacture_2/Notes";
import Child1 from "./Leacture_2/Child1";
import Child2 from "./Leacture_2/Child2";

import UserForm from "./Leacture_3/UserForm";
import UseEffectHook from "./Leacture_3/UseEffectHook";
import Hooks from "./Leacture_3/Hooks";
import NewsApp from "./Leacture_3/NewsApp";

function App() {
  // // Lecture_2
  // const [CountInParent, setCountInParent] = useState(0);
  // function UpdateCountInParent(count) {
  //   setCountInParent(count);
  // }
  // // Child2 + App (Called From Child2 Through props)_
  // function uploadData() {
  //   console.log("I am clicked");
  // }

  return (
    // <>
    //   <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
    //     <Card
    //       name="Praveen"
    //       email="kckn@gmail.com"
    //       image="https://via.placeholder.com/200"
    //     />
    //     <Card
    //       name="Praveen"
    //       email="kckn@gmail.com"
    //       image="https://via.placeholder.com/200"
    //     />
    //     <Card
    //       name="Praveen"
    //       email="kckn@gmail.com"
    //       image="https://via.placeholder.com/200"
    //     />
    //     <Avator name="Random" image="https://via.placeholder.com/100" />
    //   </div>
    // </>

    // <>
    //   <div>
    //     {/* <Counter /> */}
    //     {/* <Fruit /> */}
    //     {/* <Notes /> */}
    //     {/* <p>Inside the Parent : {CountInParent}</p>
    //     <Child1 onCountUpdate={UpdateCountInParent} />
    //     <Child2 countFromParent={CountInParent} uploadData={uploadData} /> */}
    //   </div>
    // </>

    <>
      <div>
        {/* <UserForm /> */}
        {/* <UseEffectHook /> */}
        {/* <Hooks /> */}
        <NewsApp />
      </div>
    </>
  );
}

export default App;
