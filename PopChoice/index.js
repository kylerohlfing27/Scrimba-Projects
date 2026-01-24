
import movies from './content.js'

const favoriteMovieInput = document.getElementById('favorite-movie')
const movieGenreInput = document.getElementById('genre')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function() {
    const favoriteMovie = favoriteMovieInput.value
    const movieGenre = movieGenreInput.value

    const selectedReleaseOption = document.querySelector('input[name="new-or-classic"]:checked')

    console.log(movies)

    
})