const obj = {
  name: "Praveen",
  age: 24,
};

// // Destructuring__
// const {name, age} = obj;
// console.log(name, age);

//default paramenter__
// function greet(name = "Learner"){
//     console.log("hello " + name);
// }
// greet();
// greet("Praveen");

// //Spread operator__
// function greet(...args){
//     console.log('hello ', args);
// }
// greet("Praveen" , 12 , "anuj" , "aman" , 'lovebabber');

// const num = [1, 2, 3];
// const num1 = [...num, 4,5,6];  //[num,4,5,6]
// console.log(num1);

// const animal = {
//   name: "Simba",
//   age: 23,
// };
// const fullInformation = {
//   ...animal,
//   address: "pahad",
//   legs: 4,
// };
// console.log(fullInformation);
