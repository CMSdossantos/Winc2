const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "1"
    }
    ]

const superNames = superheroes.map((hero) => hero.name); //Maak een array van alle superhelden namen
const lightWeights = superheroes.filter(hero => hero.weight < 190); //Maak een array van alle "lichte" superhelden
const twoHundredP = superheroes.filter(hero => hero.weight == 200).map(hero => hero.name); //NAMEN van de superhelden die 200 pounds wegen
const comics = superheroes.map(hero => hero.first_appearance) //Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const dcUniverse = superheroes.filter(hero => hero.publisher == "DC Comics") //Maak een array met alle superhelden van DC Comics
const marvelUniverse = superheroes.filter(hero => hero.publisher == "Marvel Comics")// en maak ook een array met alle superhelden van Marvel Comics.

//Tel het gewicht van alle superhelden van DC Comics bij elkaar op
const totalWeight = superheroes.map(hero => hero.weight = parseInt(hero.weight)).reduce((acc,curr) => { if(curr != NaN) {return acc + curr}});
const marvelTotWeight = superheroes.filter(hero => hero.publisher == "Marvel Comics" && Number.isInteger(parseInt(hero.weight)) )
.map(hero => hero.weight = parseInt(hero.weight)).reduce((acc, curr) => acc + curr); //hetzelfde met alle superhelden van Marvel Comics

const heaviestHero = superheroes.map(hero => hero.weight = parseInt(hero.weight))
.reduce((acc,curr) => { if(acc < curr && curr != NaN ) {return acc = curr} else{ return acc}});//Bonus: zoek de zwaarste superheld!

console.log(heaviestHero);