function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open")
    
}
document.getElementById('humburgerBtn').onclick=toggleMenu

//header date
const dateheader = document.querySelector(".date")
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
dateheader.innerHTML=(fulldate)

//footer last modified date

const dateModified = new Date();
const shortendate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	dateModified);
document.getElementById("date").innerText =(shortendate)