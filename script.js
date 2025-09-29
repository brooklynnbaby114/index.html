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

// Function to show all genres (demonstrates array iteration)
function showAllGenres() {
    const genreDiv = document.getElementById('genre-list');
    genreDiv.innerHTML = `
        <div class="genre-list">
            <h4>All Anime Genres (${animeGenres.length} total):</h4>
            <ul>${animeGenres.map(genre => `<li>${genre}</li>`).join('')}</ul>
        </div>
    `;
}

// Function to show top 3 genres (demonstrates array slicing)
function showPopularGenres() {
    const topGenres = animeGenres.slice(0, 3);
    const genreDiv = document.getElementById('genre-list');
    genreDiv.innerHTML = `
        <div class="genre-list">
            <h4>Top 3 Popular Genres:</h4>
            <ul>${topGenres.map(genre => `<li>${genre}</li>`).join('')}</ul>
        </div>
    `;
}

// Function to add a random genre (demonstrates array push method)
function addGenre() {
    if (additionalGenres.length > 0) {
        const randomIndex = Math.floor(Math.random() * additionalGenres.length);
        const newGenre = additionalGenres.splice(randomIndex, 1)[0];
        animeGenres.push(newGenre);
        
        const genreDiv = document.getElementById('genre-list');
        genreDiv.innerHTML = `
            <div class="genre-list">
                <h4>Added "${newGenre}" to the list!</h4>
                <p>Current genres (${animeGenres.length} total): ${animeGenres.join(', ')}</p>
            </div>
        `;
    } else {
        const genreDiv = document.getElementById('genre-list');
        genreDiv.innerHTML = `
            <div class="genre-list">
                <h4>No more genres to add!</h4>
                <p>All available genres have been added to the list.</p>
            </div>
        `;
    }
}

// Function to show random anime recommendation (demonstrates object access and array methods)
function showRandomAnime() {
    const randomIndex = Math.floor(Math.random() * animeLibrary.length);
    const randomAnime = animeLibrary[randomIndex];
    
    const recommendationDiv = document.getElementById('anime-recommendation');
    recommendationDiv.innerHTML = `
        <div class="anime-recommendation">
            <h4>🎌 Recommended Anime:</h4>
            <div class="recommendation-card">
                <h5>${randomAnime.title}</h5>
                <p><strong>Genre:</strong> ${randomAnime.genre}</p>
                <p><strong>Rating:</strong> ${randomAnime.rating}/10</p>
                <p><strong>Episodes:</strong> ${randomAnime.episodes}</p>
                <p class="recommendation-note">
                    ${randomAnime.episodes === 1 ? 'This is a movie!' : 'This is a series with multiple episodes!'}
                </p>
            </div>
        </div>
    `;
}

// Original navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactLink = document.querySelector('nav a.contact');

    // Highlight nav links on click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Display alert when contact link is clicked, or warn if not found
    if (contactLink) {
        contactLink.addEventListener('click', function() {
            alert('Contact link clicked!');
        });
    } else {
        // This else branch provides feedback if the contact link isn't found
        console.warn('Contact link not found in navigation.');
    }
});
