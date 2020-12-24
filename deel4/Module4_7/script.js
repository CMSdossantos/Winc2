const wrap = document.getElementById("wrapper")
const radioInputs = document.getElementsByClassName("filter");
let yearCheck = false;

for(input of radioInputs) {
    input.addEventListener("change", (el) => { 
        while (wrap.firstChild) {wrap.removeChild(wrap.firstChild) }

        for (movie of movies) { 
            if(parseInt(movie.Year) >= 2014) { yearCheck = true} else { yearCheck = false};
            
            switch(true){
                case el.target.value == "Nieuwste films" && yearCheck:
                case movie.Title.includes(el.target.value):
                
                    const pic = document.createElement("img");
                    pic.setAttribute("src", movie.Poster);
                
                    const divje = document.createElement("div");
                    divje.classList.add("posterFrame");
                
                    const aatje = document.createElement("a");
                    aatje.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID +"/");
                
                    aatje.appendChild(pic);
                    divje.appendChild(aatje);
                    wrap.appendChild(divje);
            }
        }
    })  
}
// firstLoad database
for (movie of movies) { 
    if(parseInt(movie.Year) >= 2014) { yearCheck = true} else { yearCheck = false};
    switch(true){ 
        case yearCheck:

        const pic = document.createElement("img");
        pic.setAttribute("src", movie.Poster);

        const divje = document.createElement("div");
        divje.classList.add("posterFrame");

        const aatje = document.createElement("a");
        aatje.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID +"/");

        aatje.appendChild(pic);
        divje.appendChild(aatje);
        wrap.appendChild(divje);
    }
}
