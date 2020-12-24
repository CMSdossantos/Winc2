const sleutel = "4f9a51831ce825cf1d8022da0a441f7d";

async function getData () {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="
    try {
        const res = await fetch(apiUrl + sleutel);
        const resJson = await res.json();
        console.log(resJson);
    } catch {
        console.log(error);
    }
    
}
