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
    
    // Initialize demo features
    initDemoFeatures();
});

// Demo Features Implementation
function initDemoFeatures() {
    loadProfile();
    loadLikeState();
    loadComments();
    loadNewsletterState();
}

// User Profile Functions
function saveProfile() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const favoriteAnime = document.getElementById('favorite-anime').value.trim();
    
    if (!username || !email || !favoriteAnime) {
        alert('Please fill in all fields!');
        return;
    }
    
    const profile = {
        username: username,
        email: email,
        favoriteAnime: favoriteAnime,
        savedAt: new Date().toLocaleString()
    };
    
    localStorage.setItem('userProfile', JSON.stringify(profile));
    displayProfile(profile);
}

function loadProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        displayProfile(profile);
        
        // Pre-fill form fields
        document.getElementById('username').value = profile.username;
        document.getElementById('email').value = profile.email;
        document.getElementById('favorite-anime').value = profile.favoriteAnime;
    }
}

function displayProfile(profile) {
    const profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = `
        <div class="profile-field"><strong>Username:</strong> ${profile.username}</div>
        <div class="profile-field"><strong>Email:</strong> ${profile.email}</div>
        <div class="profile-field"><strong>Favorite Anime:</strong> ${profile.favoriteAnime}</div>
        <div class="profile-field"><strong>Saved:</strong> ${profile.savedAt}</div>
    `;
    
    document.getElementById('profile-form').style.display = 'none';
    document.getElementById('profile-display').style.display = 'block';
}

function editProfile() {
    document.getElementById('profile-form').style.display = 'block';
    document.getElementById('profile-display').style.display = 'none';
}

function clearProfile() {
    localStorage.removeItem('userProfile');
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('favorite-anime').value = '';
    document.getElementById('profile-form').style.display = 'block';
    document.getElementById('profile-display').style.display = 'none';
}

// Like/Upvote Functions
function toggleLike() {
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');
    
    let likeData = JSON.parse(localStorage.getItem('animelike') || '{"liked": false, "count": 0}');
    
    if (likeData.liked) {
        // Unlike
        likeData.liked = false;
        likeData.count = Math.max(0, likeData.count - 1);
        likeBtn.textContent = '👍 Like';
        likeBtn.classList.remove('liked');
    } else {
        // Like
        likeData.liked = true;
        likeData.count += 1;
        likeBtn.textContent = '❤️ Liked';
        likeBtn.classList.add('liked');
    }
    
    localStorage.setItem('animelike', JSON.stringify(likeData));
    likeCountSpan.textContent = likeData.count;
}

function loadLikeState() {
    const likeData = JSON.parse(localStorage.getItem('animelike') || '{"liked": false, "count": 0}');
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');
    
    if (likeData.liked) {
        likeBtn.textContent = '❤️ Liked';
        likeBtn.classList.add('liked');
    }
    
    likeCountSpan.textContent = likeData.count;
}

// Poll/Survey Functions
function submitVote() {
    const selectedGenre = document.querySelector('input[name="genre"]:checked');
    
    if (!selectedGenre) {
        alert('Please select a genre!');
        return;
    }
    
    let pollData = JSON.parse(localStorage.getItem('genrePoll') || '{}');
    const genre = selectedGenre.value;
    
    pollData[genre] = (pollData[genre] || 0) + 1;
    localStorage.setItem('genrePoll', JSON.stringify(pollData));
    
    alert('Thank you for voting!');
    showResults();
}

function showResults() {
    const pollData = JSON.parse(localStorage.getItem('genrePoll') || '{}');
    const resultsDiv = document.getElementById('poll-results');
    
    if (Object.keys(pollData).length === 0) {
        resultsDiv.innerHTML = '<p>No votes yet. Be the first to vote!</p>';
        return;
    }
    
    const totalVotes = Object.values(pollData).reduce((a, b) => a + b, 0);
    const genres = ['Action', 'Romance', 'Comedy', 'Drama', 'Fantasy', 'Slice of Life'];
    
    let resultsHTML = '<h4>Poll Results:</h4>';
    genres.forEach(genre => {
        const votes = pollData[genre] || 0;
        const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
        
        resultsHTML += `
            <div class="poll-result-item">
                <span>${genre}</span>
                <div class="poll-bar">
                    <div class="poll-bar-fill" style="width: ${percentage}%"></div>
                </div>
                <span>${votes} vote${votes !== 1 ? 's' : ''} (${percentage}%)</span>
            </div>
        `;
    });
    
    resultsHTML += `<p><strong>Total votes: ${totalVotes}</strong></p>`;
    resultsDiv.innerHTML = resultsHTML;
}

// Comment/Guestbook Functions
function addComment() {
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    if (!name || !text) {
        alert('Please fill in both name and comment!');
        return;
    }
    
    const comment = {
        id: Date.now(),
        name: name,
        text: text,
        timestamp: new Date().toLocaleString()
    };
    
    let comments = JSON.parse(localStorage.getItem('guestbookComments') || '[]');
    comments.unshift(comment); // Add to beginning
    
    // Keep only the latest 10 comments
    if (comments.length > 10) {
        comments = comments.slice(0, 10);
    }
    
    localStorage.setItem('guestbookComments', JSON.stringify(comments));
    
    // Clear form
    nameInput.value = '';
    textInput.value = '';
    
    loadComments();
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('guestbookComments') || '[]');
    const commentsList = document.getElementById('comments-list');
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p>No comments yet. Be the first to leave a comment!</p>';
        return;
    }
    
    let commentsHTML = '';
    comments.forEach(comment => {
        commentsHTML += `
            <div class="comment-item">
                <div class="comment-meta"><strong>${comment.name}</strong> - ${comment.timestamp}</div>
                <div class="comment-text">${comment.text}</div>
            </div>
        `;
    });
    
    commentsList.innerHTML = commentsHTML;
}

function clearComments() {
    if (confirm('Are you sure you want to clear all comments?')) {
        localStorage.removeItem('guestbookComments');
        loadComments();
    }
}

// Newsletter Functions
function signupNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address!');
        return;
    }
    
    let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    
    if (subscribers.includes(email)) {
        alert('This email is already subscribed!');
        return;
    }
    
    subscribers.push(email);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
    
    document.getElementById('newsletter-form').style.display = 'none';
    document.getElementById('newsletter-success').style.display = 'block';
    
    emailInput.value = '';
}

function resetNewsletter() {
    document.getElementById('newsletter-form').style.display = 'block';
    document.getElementById('newsletter-success').style.display = 'none';
}

function loadNewsletterState() {
    const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    if (subscribers.length > 0) {
        // Show how many people are subscribed
        const successDiv = document.getElementById('newsletter-success');
        const currentMessage = successDiv.querySelector('.success-message');
        if (currentMessage) {
            currentMessage.innerHTML = `✅ Thank you for subscribing! You're now one of ${subscribers.length} subscriber${subscribers.length !== 1 ? 's' : ''} to our anime newsletter.`;
        }
    }
}

// Advanced JavaScript Demo Functions

// Form Widgets Demonstration
function demonstrateWidgets() {
    const range = document.getElementById('demo-range');
    const date = document.getElementById('demo-date');
    const file = document.getElementById('demo-file');
    const format = document.querySelector('input[name="format"]:checked');
    const output = document.getElementById('widget-output');
    
    let results = '<h4>Widget Values:</h4><ul>';
    
    // Range slider value
    results += `<li><strong>Volume Level:</strong> ${range.value}%</li>`;
    
    // Date picker value
    const dateValue = new Date(date.value);
    results += `<li><strong>Selected Date:</strong> ${dateValue.toLocaleDateString()}</li>`;
    
    // File input
    if (file.files.length > 0) {
        const fileInfo = file.files[0];
        results += `<li><strong>Selected File:</strong> ${fileInfo.name} (${Math.round(fileInfo.size / 1024)}KB)</li>`;
    } else {
        results += `<li><strong>File:</strong> No file selected</li>`;
    }
    
    // Radio button selection
    if (format) {
        results += `<li><strong>Preferred Format:</strong> ${format.value}</li>`;
    } else {
        results += `<li><strong>Format:</strong> No selection made</li>`;
    }
    
    results += '</ul>';
    output.innerHTML = results;
}

// Update range slider display in real time
document.addEventListener('DOMContentLoaded', function() {
    const rangeSlider = document.getElementById('demo-range');
    const rangeValue = document.getElementById('range-value');
    
    if (rangeSlider && rangeValue) {
        rangeSlider.addEventListener('input', function() {
            rangeValue.textContent = this.value;
        });
    }
    
    // File input change handler
    const fileInput = document.getElementById('demo-file');
    const fileInfo = document.getElementById('file-info');
    
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                const file = this.files[0];
                fileInfo.innerHTML = `
                    <div class="file-details">
                        <strong>File selected:</strong> ${file.name}<br>
                        <strong>Size:</strong> ${Math.round(file.size / 1024)}KB<br>
                        <strong>Type:</strong> ${file.type || 'Unknown'}
                    </div>
                `;
            } else {
                fileInfo.innerHTML = '';
            }
        });
    }
});

// String Methods Demonstration
function demonstrateStringMethods(method) {
    const textInput = document.getElementById('demo-text');
    const resultsDiv = document.getElementById('string-results');
    const originalText = textInput.value || 'Attack on Titan';
    
    let result = '';
    let explanation = '';
    
    try {
        switch(method) {
            case 'toUpperCase':
                result = originalText.toUpperCase();
                explanation = `Converts all characters to uppercase`;
                break;
            case 'toLowerCase':
                result = originalText.toLowerCase();
                explanation = `Converts all characters to lowercase`;
                break;
            case 'split':
                result = originalText.split(' ');
                explanation = `Splits the string into an array using space as delimiter`;
                break;
            case 'replace':
                result = originalText.replace(/attack/gi, 'Shingeki');
                explanation = `Replaces 'attack' with 'Shingeki' (case insensitive)`;
                break;
            case 'charAt':
                result = originalText.charAt(0);
                explanation = `Gets the character at position 0 (first character)`;
                break;
            case 'length':
                result = originalText.length;
                explanation = `Returns the length of the string`;
                break;
            case 'constructor':
                const stringObj = new String(originalText);
                result = stringObj.toString();
                explanation = `Creates a String object using the String() constructor`;
                break;
            default:
                result = 'Unknown method';
                explanation = 'Method not recognized';
        }
        
        // Display result
        const resultHTML = `
            <div class="string-result">
                <div class="result-header">
                    <strong>Method:</strong> ${method}() 
                    <span class="original-text">Original: "${originalText}"</span>
                </div>
                <div class="result-value">
                    <strong>Result:</strong> ${Array.isArray(result) ? '[' + result.join(', ') + ']' : '"' + result + '"'}
                </div>
                <div class="result-explanation">
                    <strong>Explanation:</strong> ${explanation}
                </div>
            </div>
        `;
        
        resultsDiv.innerHTML = resultHTML;
        
    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="string-result error">
                <strong>Error:</strong> ${error.message}
            </div>
        `;
    }
}

// Exception Handling Demonstration
function testErrorHandling(errorType) {
    const resultsDiv = document.getElementById('error-results');
    
    try {
        switch(errorType) {
            case 'parse':
                // Intentionally malformed JSON to trigger parse error
                JSON.parse('{ invalid json }');
                break;
                
            case 'reference':
                // Try to access undefined variable
                console.log(nonExistentVariable);
                break;
                
            case 'type':
                // Try to call method on null
                let nullValue = null;
                nullValue.someMethod();
                break;
                
            case 'custom':
                // Throw custom error
                throw new Error('This is a custom anime database error!');
                
            case 'success':
                // Success case - no error
                const animeData = { title: 'Demon Slayer', rating: 9.5 };
                resultsDiv.innerHTML = `
                    <div class="success-result">
                        <h5>✅ Success Case</h5>
                        <p><strong>Operation completed successfully!</strong></p>
                        <p>Retrieved anime data: ${JSON.stringify(animeData, null, 2)}</p>
                        <p><em>This demonstrates normal execution flow without errors.</em></p>
                    </div>
                `;
                return; // Exit early for success case
        }
        
    } catch (error) {
        // This is where we handle errors gracefully
        let errorCategory = 'Unknown';
        let userFriendlyMessage = '';
        let technicalDetails = error.message;
        
        if (error instanceof SyntaxError) {
            errorCategory = 'Syntax Error';
            userFriendlyMessage = 'There was a problem with the data format. Please check your input and try again.';
        } else if (error instanceof ReferenceError) {
            errorCategory = 'Reference Error';
            userFriendlyMessage = 'A required resource could not be found. Please refresh the page and try again.';
        } else if (error instanceof TypeError) {
            errorCategory = 'Type Error';
            userFriendlyMessage = 'There was a problem processing your request. Please verify your data and try again.';
        } else {
            errorCategory = 'Custom Error';
            userFriendlyMessage = 'Something went wrong with the anime database. Our team has been notified.';
        }
        
        resultsDiv.innerHTML = `
            <div class="error-result">
                <h5>🛑 ${errorCategory} Caught!</h5>
                <div class="user-message">
                    <p><strong>User-friendly message:</strong></p>
                    <p>${userFriendlyMessage}</p>
                </div>
                <div class="technical-details">
                    <p><strong>Technical details:</strong></p>
                    <p><code>${technicalDetails}</code></p>
                </div>
                <div class="error-explanation">
                    <p><em>This error was caught using try/catch blocks, preventing the application from crashing and providing a better user experience.</em></p>
                </div>
            </div>
        `;
    }
}
