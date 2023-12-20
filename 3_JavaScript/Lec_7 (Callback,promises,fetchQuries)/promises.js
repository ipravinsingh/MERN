// function orderPizza() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const isAvailable = true;
//       if (isAvailable) {
//         const pizza = "🍕";
//         resolve(pizza);
//       } else {
//         reject("We do not have Pizza");
//       }
//     }, 2000);
//   });
// }
// const pizzaPromise = orderPizza();
// pizzaPromise
//   .then((pizza) => {
//     console.log("my pizza", pizza);
//   })
//   .catch((error) => {
//     console.log("error occurde", error);
//   });
// //console.log(pizza);


// //////////Booking Railyay Ticket__
// bookRailwayTicket();
// function bookRailwayTicket() {
//   const seat = "A3";
//   const name = "Praveen";
//   const payment = 870;
//   selectSeats(seat)
//     .then((seat) => {
//       enterDetails(name, seat);
//     })
//     .then((details) => {
//       submitPayments(name, seat, payment);
//     });
// }
// function selectSeats(seat) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("seats confirmed", seat);
//       resolve(`confirmed ${seat}`);
//     }, 2000);
//   });
// }
// function enterDetails(name, seat) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("name binded", name, "with", seat);
//       resolve(`confirmed ${name} ${seat}`);
//     }, 2000);
//   });
// }
// function submitPayments(name, seat, payment) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("payment confirmed", name, "with", payment);
//       resolve(`confirmed ${name} ${seat} ${payment}`);
//     }, 2000);
//   });
// }
