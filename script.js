// JavaScript Objects and Arrays Demo for Anime Entertainment Hub

// Example of JavaScript Objects - Anime Characters
const animeCharacters = [
    {
        name: "Naruto Uzumaki",
        anime: "Naruto",
        age: 17,
        village: "Hidden Leaf Village",
        abilities: ["Shadow Clone Jutsu", "Rasengan", "Nine-Tails Chakra"],
        personality: "Determined and optimistic"
    },
    {
        name: "Monkey D. Luffy",
        anime: "One Piece",
        age: 19,
        crew: "Straw Hat Pirates",
        abilities: ["Gum-Gum Fruit Powers", "Haki", "Gear Transformations"],
        personality: "Adventurous and carefree"
    },
    {
        name: "Son Goku",
        anime: "Dragon Ball",
        age: "Unknown",
        race: "Saiyan",
        abilities: ["Kamehameha", "Ultra Instinct", "Super Saiyan"],
        personality: "Pure-hearted and strong"
    }
];

// Example of JavaScript Arrays - Anime Genres
let animeGenres = ["Shonen", "Seinen", "Shoujo", "Slice of Life", "Mecha", "Isekai"];

// Array of additional genres for demonstration
const additionalGenres = ["Romance", "Horror", "Sports", "Music", "Historical", "Supernatural"];

// Array of anime recommendations (objects in an array)
const animeLibrary = [
    { title: "Attack on Titan", genre: "Action", rating: 9.0, episodes: 87 },
    { title: "Death Note", genre: "Thriller", rating: 9.0, episodes: 37 },
    { title: "My Hero Academia", genre: "Superhero", rating: 8.5, episodes: 138 },
    { title: "Demon Slayer", genre: "Action", rating: 8.7, episodes: 44 },
    { title: "One Punch Man", genre: "Comedy", rating: 8.7, episodes: 24 },
    { title: "Spirited Away", genre: "Fantasy", rating: 9.3, episodes: 1 }
];

// Function to display character information (demonstrates object properties)
function displayCharacter(index) {
    const character = animeCharacters[index];
    const infoDiv = document.getElementById('character-info');
    
    infoDiv.innerHTML = `
        <div class="character-card">
            <h4>${character.name}</h4>
            <p><strong>Anime:</strong> ${character.anime}</p>
            <p><strong>Age:</strong> ${character.age}</p>
            <p><strong>Special Location:</strong> ${character.village || character.crew || character.race}</p>
            <p><strong>Abilities:</strong> ${character.abilities.join(', ')}</p>
            <p><strong>Personality:</strong> ${character.personality}</p>
        </div>
    `;
}

// ...[continues with the complete content as previously provided]...