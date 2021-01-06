let score = 0;

function getIt (){ 
    fetch("https://randomuser.me/api/?inc=name,gender,picture,nat&results=3")
    .then((res) => res.json())
    .then((data) => {
        const ranNumber = Math.floor(Math.random() * 3); 

        const pic = document.getElementById("pic");
        pic.setAttribute("src" , data.results[ranNumber].picture.large)

        const text = document.getElementById("this")
        text.innerHTML = `This is ${data.results[ranNumber].name.first} ${data.results[ranNumber].name.last}.`;
        
        for(let i = 0 ; i < 3 ; i++) {
            if(i == ranNumber){
                let but = document.createElement("button")
                document.getElementById("butsDiv").appendChild(but);

                but.innerHTML =  getCountryName(data.results[i].nat);
                but.addEventListener("click", () => {pressedRight() })

                console.log(data.results[i].nat); //het juiste antwoord loggen (voor debugging)   
            }else {
                let but = document.createElement("button")
                document.getElementById("butsDiv").appendChild(but);

                but.innerHTML = getCountryName(data.results[i].nat);
                but.addEventListener("click", () => {pressedWrong(data,ranNumber)} );
            }
        }
    }).catch(() => { getIt(); })
}

function pressedWrong (country,num) {
    butsDiv = document.getElementById("butsDiv");
    while (butsDiv.hasChildNodes()) { butsDiv.removeChild(butsDiv.firstChild) };
    alert(`Game over! The right answer was ${getCountryName(country.results[num].nat)}`);
}

function pressedRight() {
    butsDiv = document.getElementById("butsDiv");
    while (butsDiv.hasChildNodes()) { butsDiv.removeChild(butsDiv.firstChild) };
    score++;
    document.getElementsByTagName("h1")[0].innerHTML = `Highscore: ${score}` ;
    getIt();
}

getIt();

