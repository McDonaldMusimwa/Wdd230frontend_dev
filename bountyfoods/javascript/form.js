/* fetch the data for the form data */
const fruits = "https://brotherblazzard.github.io/canvas-content/fruit.json";
getfruits(fruits);

async function getfruits(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayOption(data);
  }
}
/* Funtion for the form in fresh page*/
function displayOption(info) {
  info.forEach((fruit) => {
    let option1 = document.createElement("option");
    option1.setAttribute("class", "choice1");
    let option2 = document.createElement("option");
    option2.setAttribute("class", "choice2");
    let option3 = document.createElement("option");
    option3.setAttribute("class", "choice3");

    option1.textContent = fruit.name;
    option1.setAttribute("value", fruit.name);
    option2.textContent = fruit.name;
    option1.setAttribute("value", fruit.name);
    option3.textContent = fruit.name;
    option1.setAttribute("value", fruit.name);

    document.getElementById("option").appendChild(option1);
    document.getElementById("option2").appendChild(option2);
    document.getElementById("option3").appendChild(option3);
  });
}

/* set the nutrion

function nutrition(data) {
  var userfrut = document.querySelector("#option").value;
  data.forEach((array) => {
    var choice = userfrut.find(array.name);
    console.log(choice);
    return choice;
  });
}
*/
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevents auto submit
});

/* modal*/
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  //header date
  const modalDate = document.querySelector("#date");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  modalDate.innerHTML = `<strong>${fulldate}</strong>`;

  let clientname = document.getElementById("clientname").value;
  let clientemail = document.getElementById("clientemail").value;
  let clientphone = document.getElementById("clientphone").value;

  
  
  
  
  /*call the nutrition function to set nutrition for first fruit choice*/
  let firstfruit = document.querySelector("#option").value;
  let firstfruitnutrition = nutrition(firstfruit);
  document.getElementById("fruit1carbs").textContent =
    firstfruitnutrition.carbohydrates;
  document.getElementById("fruit1protein").textContent =
    firstfruitnutrition.protein;
  document.getElementById("fruit1fat").textContent = firstfruitnutrition.fat;
  document.getElementById("fruit1sugar").textContent =
    firstfruitnutrition.sugar;
  document.getElementById("fruit1calories").textContent =
    firstfruitnutrition.calories;

  /*call the nutrition function to set nutrition for second fruit choice*/
  let secondfruit = document.querySelector("#option2").value;
  let secondfruitnutrition = nutrition(secondfruit);
  document.getElementById("fruit2carbs").textContent =
    secondfruitnutrition.carbohydrates;
  document.getElementById("fruit2protein").textContent =
    secondfruitnutrition.protein;
  document.getElementById("fruit2fat").textContent = secondfruitnutrition.fat;
  document.getElementById("fruit2sugar").textContent =
    secondfruitnutrition.sugar;
  document.getElementById("fruit2calories").textContent =
    secondfruitnutrition.calories;

  /* third fruit */
  let threefruit = document.querySelector("#option3").value;
  let fruitnutrition = nutrition(secondfruit);
  document.getElementById("fruit3carbs").textContent =
    fruitnutrition.carbohydrates;
  document.getElementById("fruit3protein").textContent = fruitnutrition.protein;
  document.getElementById("fruit3fat").textContent = fruitnutrition.fat;
  document.getElementById("fruit3sugar").textContent = fruitnutrition.sugar;
  document.getElementById("fruit3calories").textContent =
    fruitnutrition.calories;

  document.getElementById("instructions").textContent = document.getElementById(
    "specialInstructions"
  ).value;

  document.getElementById("firstName").textContent = clientname;
  document.getElementById("Phone").textContent = clientphone;
  document.getElementById("Email").textContent = clientemail;

  document.getElementById("fruite1").textContent = document.querySelector("#option").value;
  document.getElementById("fruite2").textContent = document.querySelector("#option2").value;
  document.getElementById("fruite3").textContent = document.querySelector("#option3").value;

  /*set the totals*/
  document.getElementById("carbstotal").textContent=firstfruitnutrition.carbohydrates+secondfruitnutrition.carbohydrates+fruitnutrition.carbohydrates
  document.getElementById("proteintotal").textContent=firstfruitnutrition.protein+secondfruitnutrition.protein+fruitnutrition.protein
  document.getElementById("fattotal").textContent=firstfruitnutrition.fat+secondfruitnutrition.fat+fruitnutrition.fat
  document.getElementById("sugartotal").textContent=firstfruitnutrition.sugar+secondfruitnutrition.sugar+fruitnutrition.sugar
  document.getElementById("caloriestotal").textContent=firstfruitnutrition.calories+secondfruitnutrition.calories+fruitnutrition.calories


  /*console.log(clientname);
  console.log(clientemail);
  console.log(clientphone);

  console.log(firstfruit);
  console.log(secondfruit);
  console.log(threefruit);*/
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* switch */

function nutrition(input) {
  var nutrion = {
    carbohydrates: 11.4,
    protein: 0.3,
    fat: 0.4,
    calories: 52,
    sugar: 10.3,
  };
  switch (input) {
    case "Apple":
      return (nutrion = {
        carbohydrates: 11.4,
        protein: 0.3,
        fat: 0.4,
        calories: 52,
        sugar: 10.3,
      });
      break;
    case "Apricot":
      return (nutrion = {
        carbohydrates: 3.9,
        protein: 0.5,
        fat: 0.1,
        calories: 15,
        sugar: 3.2,
      });
      break;
    case "Avacado":
      return (nutrion = {
        carbohydrates: 8.53,
        protein: 2,
        fat: 14.66,
        calories: 160,
        sugar: 0.66,
      });
      break;
    case "Banana":
      return (nutrion = {
        carbohydrates: 22,
        protein: 1,
        fat: 0.2,
        calories: 96,
        sugar: 17.2,
      });
      break;
    case "Blackberry":
      return (nutrion = {
        carbohydrates: 9,
        protein: 1.3,
        fat: 0.4,
        calories: 40,
        sugar: 4.5,
      });
      break;
    case "Blueberry":
      return (nutrion = {
        carbohydrates: 5.5,
        protein: 0,
        fat: 0.4,
        calories: 29,
        sugar: 5.4,
      });
      break;
    case "Cherry":
      return (nutrion = {
        carbohydrates: 12,
        protein: 1,
        fat: 0.3,
        calories: 50,
        sugar: 8,
      });
      break;
    case "Dragonfruit":
      return (nutrion = {
        carbohydrates: 9,
        protein: 9,
        fat: 1.5,
        calories: 60,
        sugar: 8,
      });
      break;
  }
}

/*
function nutrion(data) {
  let firstfruit1 = document.querySelector("#option").value;
  let secondfruit2 = document.querySelector("#option2").value;
  let threefruit3 = document.querySelector("#option3").value;

  console.log(firstfruit1);
  console.log(data)
  var _index = -1;
  for (var i = 0; i <data.length; i++) {
    if (data[i].name == firstfruit1) {
      _index = i;
      //var nutriondata = data[i].nutrition;
      console.log(_index);
    }
  }
}
*/
