const sleutel = "4f9a51831ce825cf1d8022da0a441f7d";

function getMovieGenres (){
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + sleutel)
    .then((response)=> { return response.json()})
    .then(objson => {
        objson.genres.map(genre => {
            const item = document.createElement("li");
            item.innerHTML = genre.name + " id= " + genre.id ;
            document.body.appendChild(item);
        })
    })
}

function getSpecificMovie(){
    fetch("https://api.themoviedb.org/3/find/tt0120689?api_key="+ sleutel + "&language=en-US&external_source=imdb_id")
    .then((response)=> response.json())
    .then(response => {
            const titletag = document.createElement("h1");
            titletag.innerHTML = "My favorite movie:";
            document.body.appendChild(titletag)

            const item = document.createElement("li");
            item.innerHTML = response.movie_results[0].original_title ;
            document.body.appendChild(item);
        
    })
}

function getTopRatedMovies(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + sleutel + 
    "&sort_by=vote_average.desc")
    .then((response)=> response.json())
    .then(response => {
            
            const titletag = document.createElement("h1");
            titletag.innerHTML = "Top rated movies:";
            document.body.appendChild(titletag)

            response.results.map( (movie) => {
            if(movie.genre_ids.includes(28)) {
            const item = document.createElement("li");
            item.innerHTML = movie.original_title;
            document.body.appendChild(item);
            }
        })
    })
}

function getMovie1975 (){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + sleutel + 
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975")
    .then((response)=> { return response.json()})
    .then(response => {
        const anothertitle = document.createElement("h1");
        anothertitle.innerHTML = "movies of 1975: ";
        document.body.appendChild(anothertitle)

        response.results.map(movie => {
            const item = document.createElement("li");
            item.innerHTML = movie.original_title;
            document.body.appendChild(item);
        })
    })
}

getMovieGenres();
getSpecificMovie();
getTopRatedMovies();
getMovie1975();
