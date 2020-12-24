const btnElements = document.getElementsByClassName("big-five-list-item");
const spotListItems = document.getElementsByClassName("spotted-animals-list-item")
let spotList = document.getElementById("spotted-animals-list")
let aniLi = [];

const btnsArr = Array.from(btnElements).map((el) => { el.addEventListener("click", function() {   
    if(!aniLi.includes(el.firstElementChild.innerHTML)) { 
        aniLi.push(el.firstElementChild.innerHTML)   
        let listElement = document.createElement("li")
        let text = document.createTextNode(el.firstElementChild.innerHTML)
        listElement.appendChild(text)
        listElement.classList.add("spotted-animals-list-item") 
        spotList.appendChild(listElement)
        }
}) }) 

const remFirst = document.getElementById("remove-first-item-button").addEventListener("click", function() {
    if(spotListItems.length){
        spotListItems[0].remove();
        aniLi.shift()}
})

const remAll = document.getElementById("remove-all-button").addEventListener("click", function() {
    Array.from(spotListItems).map((el) => {
         el.remove();
         aniLi.shift();
    });
})



    
