// const orderPizza = (callback) => {
//   setTimeout(() => {
//     const pizza = "🍕";
//     callback(pizza);
// console.log("Pizza print"+pizza);
//   }, 2000);
// };
// console.log(orderPizza);
// orderPizza((pizz) => {
//   console.log("here is my", pizz);
// return pizza;
// });

// same__
// function notifyMeonSuccess(piz) {
//   console.log("here is my notification for", piz);
// }
// orderPizza(notifyMeonSuccess);
// console.log("visited nani");
// console.log("rest");



// /////////
// function orderPizza(myFunction) {
//   getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//       bakePizza(dough, (pizza) => {
//         myFunction(pizza);
//       });
//     });
//   });
// }

// function getCheese(next) {
//   setTimeout(() => {
//     const cheese = "🧀";
//     console.log(`Sending the ${cheese}`);
//     next(cheese);
//   }, 2000);
// }
// function makeDough(cheese, next) {
//   setTimeout(() => {
//     const dough = cheese + "🍪";
//     console.log(`Sending the ${dough}`);
//     next(dough);
//   }, 2000);
// }
// function bakePizza(dough, next) {
//   setTimeout(() => {
//     const pizza = dough + "🍕";
//     console.log(`Sending the ${pizza}`);
//     next(pizza);
//   }, 2000);
// }

// function notifyMeonSuccess(pizza) {
//   console.log("here is my notification for", pizza);
// }

// orderPizza(notifyMeonSuccess);
