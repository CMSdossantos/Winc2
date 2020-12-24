const hamHover = document.getElementsByTagName("img")[0];
const myUl = document.getElementsByTagName("ul")[0];
let state = false;

hamHover.onmouseover = function () {
    if(!state) {
    myUl.classList.remove("display-off"); console.log('hover');
    state = true;
  }
}
hamHover.onmouseleave = function() {
    if(myUl.parentNode.querySelector(":hover") != myUl) {
        myUl.classList.add("display-off"); console.log('mouseout img');
    state = false;
 }
}
myUl.onmouseleave = function() {
     if(state){
        myUl.classList.add("display-off"); console.log('mouseout UL');
        state = false;
     }
    }

const listItems = document.getElementsByTagName("li");
const colors = ["white-bg","blue-bg","red-bg","yellow-bg", "purple-bg","green-bg"];

for(let i = 0; i < colors.length; i++){
    listItems[i].addEventListener('click', () => {
        document.body.removeAttribute("class");
        document.body.classList.add(colors[i]);
        myUl.classList.add("display-off");
        state = false;
    })
}

