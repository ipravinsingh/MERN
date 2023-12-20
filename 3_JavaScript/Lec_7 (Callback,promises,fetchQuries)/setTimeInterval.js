const a = 23;

const b = 12;

// console.log('ordering burger');
// for(let i=0; i<5000000000; i++){
//     let n = i*3857558;
// }
// console.log('burger eaten');

const d = 12;

//SetTimeout Function__

// function greet(obj) {
//   console.log("Hello World", obj.name);
// }

// console.log("before greet");
// setTimeout(greet, 2000, "Praveen");

// const greetoutId = setTimeout(() => {
//   greet({
//     name: "Praveen",
//   });
// }, 2000);

// const greetTimeoutId = setTimeout(() => {
//   console.log("Good nigth");
// }, 4000);

// clearTimeout(greetTimeoutId);
// console.log("This will call after greet");

// greet();

// SetInterval__
const intervalId = setInterval(increaseCount, 1000);

let count = 0;
function increaseCount() {
  count++;
  const date = new Date().toTimeString();

  console.log(count);
  console.log(date);

  if (count == 5) {
    clearInterval(intervalId);
  }
}
// increaseCount();

console.log('another work');

