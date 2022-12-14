import daTa from "./data.json" assert { type: "json" };

/*Hamburger menu Js*/
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("humburgerBtn").classList.toggle("open");
}

const openmenu = document.getElementById("humburgerBtn");
openmenu.onclick = toggleMenu;

//header date
const headerdate = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

headerdate.innerHTML = `<strong>${fulldate}</strong>`;

displayHeroProducts(daTa);
/*Products sport light JS*/
function displayHeroProducts(data) {
 
  data.forEach((Array) => {
    let card = document.createElement("section");
    let image = document.createElement("img");
    let label = document.createElement("label");

    image.setAttribute("src", Array.product);
    image.setAttribute("alt", Array.description);
    image.setAttribute("class", "heroimg");
    label.textContent = `${Array.description}`;

    card.appendChild(image);
    card.appendChild(label);
   
    document.querySelector(".products").appendChild(card);
  });
}



//footer last modified date

const dateModified = new Date();
const shortendate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(dateModified);
document.getElementById("date").innerText = shortendate;
