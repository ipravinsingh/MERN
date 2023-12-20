// const box = document.getElementById("box");
// const container = document.getElementById("Container");

// let count = 0;
// const logMessage = () => {
//   console.log("Clicked" + " " + count++);
// };

// const coordinates = document.createElement('p');
// document.body.append(coordinates);

// const logMessage = (event) => {
// //   console.log(event);
//   coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
//     box.style.left = `${event.offsetX}px`;
//     box.style.top = `${event.offsetY}px`;
// };

// box.addEventListener("click", logMessage);

// container.addEventListener("mousemove", logMessage);



const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


child.addEventListener('click' , () =>{
    console.log('child clicked');
    child.classList.toggle('round');
})
parent.addEventListener('click' , () =>{
    console.log('parent clicked');
    parent.classList.toggle('round');
})
grandparent.addEventListener('click' , () =>{
    console.log('grandparent clicked');
    grandparent.classList.toggle('round');
})
