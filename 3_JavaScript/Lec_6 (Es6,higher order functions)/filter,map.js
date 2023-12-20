const a = [1, 2, 3, 4, 5, 6, 7, 8];

// function isEven(num) {
//   return num % 2 == 0;
// }
// function isOdd(num) {
//   return num % 2 != 0;
// }

// //Filter Function__
// const c = a.filter((element) => {
//   return element % 3 == 0;
// });
// console.log(c);
// const b = a.filter(isEven);
// console.log(b);

// //Map Function__
// function square(num) {
//   return num * num;
// }
// const b = a.map(square);
// console.log(a);
// console.log(b);

// function negative(num) {
//   return -num;
// }
// const c = a.map(negative);
// console.log(c);

// const d = a.map((num) => 2 * num);
// console.log(d);

// Find Function__
// const found = a.find((element) => element % 2 == 0);
// console.log(found);

const student = [
  {
    name: "Praveen",
    marks: 100,
  },
  {
    name: "Naveen",
    marks: 40,
  },
  {
    name: "Anuj",
    marks: 90,
  },
  {
    name: "Aman",
    marks: 95,
  },
];

// const grades = student.map((element) =>{
//     if(element.marks < 50){
//         element.isPassed = false;
//     }
//         else{
//             element.isPassed = true;
//         }
//         return element;
// });
// console.log(grades);

const mark = student.find((element) => {
  return element.marks < 50;
});
console.log(mark);
