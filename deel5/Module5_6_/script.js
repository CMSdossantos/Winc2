const lijst = document.getElementById("lijst");
let arr = [];
//Subopdracht: landenlijst - 1 punt
const landen = document.getElementById("landen");
landen.addEventListener("click", () => {
    clearList();
    for(let i= 0; i < randomPersonData.length; i++){
        if(!arr.includes(randomPersonData[i].region)){
        arr.push(randomPersonData[i].region);
    }
}
addList(arr,"region");
})
//Subopdracht: steenbokvrouwen - 3 punten
const steenbok = document.getElementById("sb");
steenbok.addEventListener("click",() => {
    clearList();
    randomPersonData.sort((a, b) => { return a.name.localeCompare(b.name)})
    .filter((data) => {
        switch (true) {
            case data.gender != "female":
            case data.age <= 30:
            case new Date("2000/"+ data.birthday.mdy.slice(0,6)) <= new Date("2000/12/22/") &&
                 new Date("2000/"+ data.birthday.mdy.slice(0,6)) >= new Date("2000/01/19/"):
                console.log("case");
                break;                
            default :
            arr.push(data);
        }
    })
    addList(arr,"steenbok");
})

function addList (itemArr, modus) {
    switch (modus) {
        case "region":
            itemArr.sort()
            itemArr.map((item) => {
            let ele = document.createElement("li")
            lijst.appendChild(ele);
            ele.innerHTML = item
            } )
        break;
        
        case "steenbok":
            itemArr.map((item) => {
            let ele = document.createElement("li")
            lijst.appendChild(ele);
            ele.innerHTML = item.name + " " + item.surname;
            let photo = document.createElement("img")
            photo.setAttribute("src", item.photo);
            lijst.appendChild(photo);
            } )
        break;

        default:
            console.log("no match in switch");
            break;
    }
}

function clearList() {
    while(lijst.firstChild) {
        lijst.firstChild.remove();
        arr = [];
    }
}
