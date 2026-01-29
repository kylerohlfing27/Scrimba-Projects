
const favoriteMovieInput = document.getElementById('favorite-movie')
const movieGenreInput = document.getElementById('genre')
const submitBtn = document.getElementById('submit-btn')
const startOverBtn = document.getElementById('start-over-btn')

const movieFormContainer = document.getElementById('movie-form')
const recommendationContainer = document.getElementById('recommendation')
const movieTitle = document.getElementById('movie-title')
const movieYear = document.getElementById('movie-year')
const movieRecommendation = document.getElementById('movie-recommendation')

const loader = document.getElementById('loader')

submitBtn.addEventListener('click', function() {
    const favoriteMovie = favoriteMovieInput.value
    const movieGenre = movieGenreInput.value
    const selectedReleaseOption = document.querySelector('input[name="new-or-classic"]:checked')

    clearInputs()
    
    movieFormContainer.style.display = 'none'
    loader.style.display = 'block'
    
    getMovieRecommendation(favoriteMovie, movieGenre, selectedReleaseOption.value)
})

startOverBtn.addEventListener('click', function() {
    renderMovieForm()
})

async function getMovieRecommendation(favoriteMovie, movieGenre, releaseOption) {
    try {
        const recommendedMovieResponse = await fetch('http://localhost:3001/generate-movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userQuery: {
                    favoriteMovie: favoriteMovie,
                    movieGenre: movieGenre,
                    releaseOption: releaseOption
                }
            })
        })

        const recommendedMovie = await recommendedMovieResponse.json()

        console.log("-- Recommended Movie Response: ", recommendedMovie)

        const recommendedMovieTitle = recommendedMovie.movieTitle
        const recommendedMovieYear = recommendedMovie.movieReleaseYear
        const recommendedMovieContent = recommendedMovie.movieContent

        const recommendationInstructions = `Based on the user's favorite movie "${favoriteMovie}" and preferred genre "${movieGenre}", as well as the description of the movie - generate a short description on why the user would enjoy the given movie. Make sure the response never exceeds 3 sentences.`

        const recommendationQueryText = `Title: ${recommendedMovieTitle} (${recommendedMovieYear}) Description: ${recommendedMovieContent}`

        const movieRecommendation = await fetch('http://localhost:3001/recommend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recommendationInstructions: recommendationInstructions,
                movieDetails: recommendationQueryText
            })
        })

        const recommendationData = await movieRecommendation.json()

        renderRecommendation(recommendedMovieTitle, recommendedMovieYear, recommendationData.movieRecommendation)
    } catch (error) {
        console.error("Error fetching movie recommendation: ", error)
    }
    
}

function clearInputs() {
    favoriteMovieInput.value = ''
    movieGenreInput.value = ''
    document.querySelector('input[name="new-or-classic"]:checked').checked = false
}

function renderRecommendation(title, year, recommendationText) {
    movieTitle.textContent = title
    movieYear.textContent = year
    movieRecommendation.textContent = recommendationText

    loader.style.display = 'none'

    recommendationContainer.style.display = 'block'
    startOverBtn.style.display = 'block'
}

function renderMovieForm() {
    recommendationContainer.style.display = 'none'
    movieFormContainer.style.display = 'flex'
    startOverBtn.style.display = 'none'
    submitBtn.style.display = 'block'
}
