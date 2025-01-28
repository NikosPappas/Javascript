/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

searchButton.addEventListener('click', searchMovies);

async function searchMovies() {
    const query = searchInput.value;
    if (!query) {
        alert("Please enter a movie name!");
        return;
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            movieList.innerHTML = '<p>No movies found.</p>';
            return;
        }

        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
        movieList.innerHTML = '<p>Sorry, something went wrong!</p>';
    }
}

function displayMovies(movies) {
    movieList.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const moviePoster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';

        movieCard.innerHTML = `
            <img src="${moviePoster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
        `;

        movieList.appendChild(movieCard);
    });
}
