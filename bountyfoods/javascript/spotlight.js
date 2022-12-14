import daTa from './data2.json' assert{type: 'json'};

/*Hamburger menu Js*/
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humburgerBtn").classList.toggle("open");

}


const openmenu = document.getElementById("humburgerBtn");
openmenu.onclick=toggleMenu;

//header date
const headerdate = document.querySelector(".date")
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

headerdate.innerHTML = `<strong>${fulldate}</strong>`

/*Products sport light JS*/
displayProducts(daTa)


function displayProducts(products){
    products.forEach(product => {
        /*create a card*/
        let card = document.createElement("section")

        /*create an image and a label*/
        let image = document.createElement("img")
      

        /*set attributes of the image*/
        image.setAttribute("src",product.product)
        image.setAttribute("alt", product,product)
        image.setAttribute("class",'product-socials')
        image.setAttribute("loading",'lazy')

        /*set the label inner html*/
       

        /*now add the image and label to the card element*/
        card.appendChild(image)
        

        /*now add the card to the html element*/
        document.querySelector(".pics").appendChild(card)
    });



}