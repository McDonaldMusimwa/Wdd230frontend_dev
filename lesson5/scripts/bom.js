const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector(".list");


  
button.addEventListener('click', function () {
    if (input.value!==""){
    const myItems = input.value;
    input.value = "";

    //create 3 variables and within then create elements 1:list if scriptures 2:span element 3:button for deleting items
    const itemList = document.createElement("li");
    const span = document.createElement("span");
    const listbutton = document.createElement("button");


    itemList.appendChild(span);
    span.textContent = myItems;

    itemList.appendChild(listbutton);
    listbutton.textContent = "❌";
    listbutton.ariaLabel="Remove chapter"
    
    console.log(itemList)
    list.appendChild(itemList);

    listbutton.addEventListener("click", () => {
        list.removeChild(itemList)
    });
    input.focus();}

})
