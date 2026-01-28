
const favoriteMovieInput = document.getElementById('favorite-movie')
const movieGenreInput = document.getElementById('genre')
const submitBtn = document.getElementById('submit-btn')
const selectedReleaseOption = document.querySelector('input[name="new-or-classic"]:checked')

submitBtn.addEventListener('click', function() {
    const favoriteMovie = favoriteMovieInput.value
    const movieGenre = movieGenreInput.value
    const releaseOption = selectedReleaseOption.value

    getMovieRecommendation(favoriteMovie, movieGenre, releaseOption)
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
    } catch (error) {
        console.error("Error fetching movie recommendation: ", error)
    }
    
}

function clearInputs() {
    favoriteMovieInput.value = ''
    movieGenreInput.value = ''
    selectedReleaseOption.checked = false
}

function renderRecommendation() {
    
}

function renderMovieForm() {

}
