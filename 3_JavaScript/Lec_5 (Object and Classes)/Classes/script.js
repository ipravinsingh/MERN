// const student = {
//     name: 'Praveen',
//     marks: 86,
//     talk: function (){
//         console.log(`My name is ${this.name} and my marks are ${this.marks}`);
//     }
// }
// student.talk();

// //classes__
class Vehicle {
  constructor(model, wheels) {
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    console.log("vehicle starting");
  }
}
const obj1 = new Vehicle("Sedan", 6);
// const obj2 = new Vehicle("Hatchback", 4);
// console.log(obj1);
// console.log(obj2);
// obj1.start();
// console.log(typeof Vehicle);

// JSON__

const jsonString = "{\"userId\":1,\"id\":1,\"title\":\"suntautfacererepellatprovidentoccaecatiexcepturioptioreprehenderit\",\"body\":\"quiaetsuscipit\\nsuscipitrecusandaeconsequunturexpeditaetcum\\nreprehenderitmolestiaeututquastotam\\nnostrumrerumestautemsuntremevenietarchitecto\"}"
 
const jsonObject = JSON.parse(jsonString);       //Convert jsonString into jsObject..
console.log(jsonObject);

const backToString = JSON.stringify(jsonObject);  //Backto JSON String into jsObject..
const backToString1 = JSON.stringify(obj1);
console.log(backToString);
console.log(backToString1);