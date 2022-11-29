import daTa from './data.json' assert{type: 'json'};


function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("humburgerBtn").classList.toggle("open");

}

const btnmenu = document.getElementById('humburgerBtn')
btnmenu.onclick = toggleMenu

//header date
const headerdate = document.querySelector(".date")
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

headerdate.innerHTML = `<strong>${fulldate}</strong>`

//footer last modified date

const dateModified = new Date();
const shortendate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	dateModified);
document.getElementById("date").innerText = (shortendate)


// Directory page javascript
displaybusiness(daTa)


function displaybusiness(businessess) {
	
	businessess.forEach(business => {
		// create the card element and all the elements that will be children of the card
		let card = document.createElement("section");
		card.setAttribute('class', 'card')
		//childred of card elemenet
		let image = document.createElement("img");
		let label = document.createElement("label");
		let address = document.createElement("p");

		let phone = document.createElement("p");

		let Siteaddress = document.createElement("button");
		let sitelink = document.createElement("a");

		//image of the business
		image.setAttribute('src', business.logo);
		image.setAttribute('alt', business.name);
		image.setAttribute('class', 'directory')
		image.setAttribute('loading', 'lazy');

		//set the other none media elements
		label.textContent = (`${business.name}`);
		address.textContent = (`${business.address}`);
		phone.textContent = (`${business.phone}`);

		// the site 
		//Siteaddress.textContent = ("Visit Us");
		Siteaddress.setAttribute('class', 'link')
		sitelink.setAttribute('href', business.site);
		sitelink.textContent = "Visit Us";
		Siteaddress.appendChild(sitelink);


		card.appendChild(image);
		card.appendChild(label);
		card.appendChild(phone);
		card.appendChild(address);
		card.appendChild(Siteaddress);

		//append to the directory element
		console.log(card)
		document.querySelector(".directory").appendChild(card);
	});



}
