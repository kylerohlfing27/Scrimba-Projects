// Kyle Rohlfing
// 12/2025
// Movie Watchlist Scripts - index

const myWatchlistBtn = document.getElementById('my-watchlist-btn')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const moviesContainer = document.getElementById('movies-container')
const landingMessage = document.getElementById('landing-message')
const loader = document.getElementById('loader')

const apiBase = 'https://api.themoviedb.org/3/search/movie?'
const readAccessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2RhZTM3NWI1YjEyODMzMTJlYmZlZDg4NzllZTEwMSIsIm5iZiI6MTc2NTE0MzgzNC4zNiwic3ViIjoiNjkzNWY1MWE5ZDE4YTM2NTczMTdiM2M1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Vs_ugUgG7TcIve79ZW4uTSnQTXpso_IY7xKC4U1txZQ`
const imgApiBase = 'https://image.tmdb.org/t/p/w500'
const movieDetailsApiBase = 'https://api.themoviedb.org/3/movie/'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${readAccessToken}`
  }
}
const additionalParams = '&language=en-US&page=1&include_adult=false'

myWatchlistBtn.addEventListener('click', function() {
    window.location.href = 'watchlist.html'
})

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchFn()
    }
})
searchBtn.addEventListener('click', searchFn)


async function searchFn() {
    moviesContainer.innerHTML = '<span class="loader" id="loader"></span>'
    const query = searchInput.value.trim()
    if (!query) return

    const response = await fetch(`${apiBase}query=${encodeURIComponent(query)}${additionalParams}`, options)
    const data = await response.json()

    let movieDetailsArr = []
    for (let movie of data.results) {
        let movieDetails = await retrieveMovieDetails(movie.id)
        movieDetailsArr.push(movieDetails)
    }

    renderMovies(movieDetailsArr)
}

function renderMovies(movies) {
    if(movies.length === 0) {
        landingMessage.innerHTML = `<p class="light-color">Unable to find what you’re looking for. Please try another search.</p>`
        return
    }
    let moviesContainerHTML = movies.map(movie => generateMovieCard(movie)).join('')

    moviesContainer.innerHTML = moviesContainerHTML

    // Add event listeners to watchlist buttons
    // NEED TO ADD THIS TO RENDER WATCHLIST FUNCTION AS WELL
    let allWatchlistButtons = document.querySelectorAll(".watchlist-btn")
    allWatchlistButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            console.log(e.target.parentElement.dataset.movieId)
            const id = e.target.parentElement.dataset.movieId
            addToWatchlist(id)
        })
    })
}

function generateMovieCard(movie) {
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
                        <img src="img/plus-btn.png" alt="A plus button" class="sub-message-icon"><p class="sub-message-text">Watchlist</p>
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

function addToWatchlist(movieId) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    if (!watchlist.includes(movieId)) {
        watchlist.push(movieId)
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
        alert('Movie added to your watchlist!')
    } else {
        alert('This movie is already in your watchlist.')
    }
}
