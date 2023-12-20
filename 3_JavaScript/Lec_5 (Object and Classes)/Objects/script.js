// const y = {
//   name: "praveen",
//   age: 24,
//   hobbies: ["coding", "eating", "cycling"],
//   foods: {
//     sunday: "pizza",
//     monday: "burger",
//     tuesday: {},
//   },
// };
// y.name = "shivam";
// y.ishuman = true;
// console.log(y);
// console.log(y.name);
// console.log(y["age"]);

const myObj = {
  age: 26,
  isHuman: true,
  hobbies: ["singing", "coding"],
  walk: () => {
    console.log("person is walking");
  },
};
myObj.skill = "Coding";
myObj.name = "Praveen";
myObj.age = 12;
// console.log(myObj["age"]);
// console.log(myObj.isHuman);
// for (const key in myObj) {
// console.log(key);
//   console.log(myObj[key]);
// }

// function getVehicle(){
//     return {
//         type: 'Car',
//         wheels: 4
//     }
// }
// const myVehicle1 = getVehicle();
// const myVehicle2 = getVehicle();
// myVehicle2.wheels = 3;
// console.log(myVehicle1);
// console.log(myVehicle2);

// object destructing ES6__
// console.log(myObj);
// const myAgr = myObj.age;
// const myIsHuman = myObj.isHuman;
// const {age, isHuman: myIsHuman, walk} = myObj;   // age: Myage
// console.log(age, myIsHuman);                     // Myage

// walk();

// myObj.walk();
// console.log()

// talking(() => {
//   console.log("I am shouting");
// });

// function shouting(){
//     console.log('I am shouting');
// }
// talking (shouting)

function talking(shouting) {
  console.log("I am talking");
  shouting();
}
