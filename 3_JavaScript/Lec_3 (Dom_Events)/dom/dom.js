const box2 = document.getElementById("box-2");
// console.log(box2);
box2.innerHTML = "<h1>This is  box2</h1>";
box2.classList.add("fancy");
box2.classList.remove("fancy");
box2.style.borderRadius = "50%";
box2.style.backgroundColor = "brown";

const container = document.getElementsByClassName("container");
// console.log(container);
// for (let i = 0; i < 10; i++) {
//   const boxElement = document.createElement("div");
//   boxElement.classList.add("box");
//   container[0].append(boxElement);
// }

const divs = document.getElementsByTagName("div");
// console.log(divs);

const box3 = document.querySelector("#box-3");
// console.log(box3);

const boxMultiples = document.querySelectorAll(".container div");
// console.log(boxMultiples[2]);

document.getElementById("my-img").src = "https://via.placeholder.com/100";
