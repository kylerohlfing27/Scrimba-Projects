// Kyle Rohlfing
// 12/2025
// Movie Watchlist Scripts - Watchlist page

// import { generateMovieCard, retrieveMovieDetails } from './index.js'

const searchMoviesBtn = document.getElementById('search-movies-btn')
const addMoviesBtn = document.getElementById('add-movies-btn')

const movieDetailsApiBase = 'https://api.themoviedb.org/3/movie/'
const readAccessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2RhZTM3NWI1YjEyODMzMTJlYmZlZDg4NzllZTEwMSIsIm5iZiI6MTc2NTE0MzgzNC4zNiwic3ViIjoiNjkzNWY1MWE5ZDE4YTM2NTczMTdiM2M1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Vs_ugUgG7TcIve79ZW4uTSnQTXpso_IY7xKC4U1txZQ`
const imgApiBase = 'https://image.tmdb.org/t/p/w500'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${readAccessToken}`
  }
}

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
            watchlistHTML += generateWatchlistMovieCard(movieData)
        }
        document.getElementById('movies-container').innerHTML = watchlistHTML
        // Add event listeners to watchlist buttons
        let allWatchlistButtons = document.querySelectorAll(".watchlist-btn")
        allWatchlistButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const movieId = parseInt(e.currentTarget.getAttribute("data-movie-id"))
                removeFromWatchlist(movieId)
            })
        })
    } else {
        document.getElementById('movies-container').innerHTML = `
            <div class="watchlist-landing-message">
                <p class="light-color">Your watchlist is looking a little empty...</p>
                <div class="sub-message" id="add-movies-btn">
                    <img src="img/plus-btn.png" alt="A plus button" class="sub-message-icon"><p class="sub-message-text">Let's add some movies!</p>
                </div>
            </div>
            `
    }
}

function generateWatchlistMovieCard(movie) {
    if(!movie.overview) {
        movie.overview = "No overview available."
    }
    if(!movie.runtime) {
        movie.runtime = "N/A"
    }
    let genreNames = "N/A"
    if(movie.genres && movie.genres.length > 0) {
        genreNames = movie.genres.map(genre => genre.name).join(', ')
    }

    return `
        <div class="movie-card">
            <img src="${imgApiBase + movie.poster_path}" alt="Movie Poster" class="movie-poster">
            <div class="movie-details">
                <p class="movie-title">${movie.title} <span>⭐ ${Math.round(movie.vote_average * 10) / 10}</span></p>
                <div class="movie-meta">
                    <p class="movie-runtime">${movie.runtime} mins</p>
                    <p class="movie-genre">${genreNames}</p>
                    <button class="sub-message btn watchlist-btn" data-movie-id="${movie.id}">
                        <img src="img/remove.png" alt="A minus button" class="sub-message-icon"><p class="sub-message-text">Remove</p>
                    </button>
                </div>
                <p class="movie-overview">${movie.overview}</p>
            </div>
        </div>
    `
}

async function retrieveMovieDetails(movieId) {
    const response = await fetch(`${movieDetailsApiBase}${movieId}?language=en-US`, options)
    const data = await response.json()
    return data
}

function removeFromWatchlist(movieId) {
    console.log("Removing movie ID:", movieId)
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    const index = watchlist.indexOf(movieId)
    if (index > -1) {
        watchlist.splice(index, 1)
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
        alert('Movie removed from your watchlist!')
        renderWatchlist()
    }
}

renderWatchlist()