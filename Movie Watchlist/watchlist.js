// Kyle Rohlfing
// 12/2025
// Movie Watchlist Scripts - Watchlist page

import { generateMovieCard, retrieveMovieDetails } from './index.js'

const searchMoviesBtn = document.getElementById('search-movies-btn')
const addMoviesBtn = document.getElementById('add-movies-btn')

searchMoviesBtn.addEventListener('click', function() {
    window.location.href = 'index.html'
})

addMoviesBtn.addEventListener('click', function() {
    window.location.href = 'index.html'
})

async function renderWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    if (watchlist.length != 0) {
        let watchlistHTML = ''
        for (let movieId of watchlist) {
            const movieData = await retrieveMovieDetails(movieId)
            watchlistHTML += generateMovieCard(movieData)
        }
        document.getElementById('movies-container').innerHTML = watchlistHTML
    }
}

renderWatchlist()