// Callback example__
// function orderPizza(myfunction) {
//   const pizza = "🍕";
//   myfunction(pizza);
// }

// function parameterpass(pizza) {
//   console.log("Pizza is printing", pizza);
// }
// orderPizza(parameterpass);

///////////////////////////////////////////

// function orderPizza(myfunction) {
//   setTimeout(() => {
//     const pizza = "🍕";
//     myfunction(pizza);
//   },2000);
// }
// function parameterpass(pizza) {
//   console.log("Pizza is printing", pizza);
// }
// orderPizza(parameterpass);

// function orderPizza(myfunction) {
//   bakePizza((pizza) => {
//     myfunction(pizza);
//   });
// }

/////////////////////////////////////////////
// function bakePizza(callback) {
//   makeDough((dough) => {
//     setTimeout(() => {
//       const pizza = "🍕";
//       console.log("baked the", pizza);
//       callback(pizza);
//     }, 2000);
//   })
// }

// function makeDough(callback) {
//   setTimeout(() => {
//     const dough = "🍪";
//     console.log("baked the dough", dough);
//     callback(dough);
//   }, 2000);
// }

// function notifyMeonSuccess(pizza) {
//   console.log("here is my notification for", pizza);
// }
// orderPizza(notifyMeonSuccess);
