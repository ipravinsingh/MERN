// fetch('https://dummyjson.com/products/1');

async function fetchData() {
  try {
    const loadingElement = document.getElementById("loading");
    const phoneBox = document.getElementById("box");

    loading.style.display = "block";
    phoneBox.style.display = "none";

    const response = await fetch("https://dummyjson.com/products/1");
    console.log(response);

    const jsonData = await response.json();
    console.log(jsonData);

    phoneBox.style.display = "block";
    loadingElement.style.display = "none";

    loadData(jsonData);
  } catch (error) {
    loading.innerHTML = "Invalid response";
  }
}

function loadData(jsonData) {
  const phoneTextElement = document.getElementById("phone-title");
  const phoneDescElement = document.getElementById("phone-desc");
  const phoneImg = document.getElementById("phone-img");

  //   phoneTextElement.innerHTML = jsonData.title;
  //   phoneDescElement.innerHTML = jsonData.description;
  //   phoneImg.src = jsonData.thumbnail;

  const { title, description, thumbnail } = jsonData;
  phoneTextElement.innerHTML = title;
  phoneDescElement.innerHTML = description;
  phoneImg.src = thumbnail;
}

fetchData();

// /// then method
// const response = fetch(apiurl);
// response.then((response, reject) => {

// }).catch((error)=>{

// })
