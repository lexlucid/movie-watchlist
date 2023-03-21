// edge-case notes: if movie has no poster, replace with another image

const searchBtn = document.querySelector("#search-button")
const searchInput = document.querySelector("#search")
const movieList = document.querySelector("#movie-list")
const movieTitle = document.querySelector(".title")
const url = `http://www.omdbapi.com/?apikey=396f1f1a`

searchBtn.addEventListener("click", getMovieList)

function getMovieList() {
    const searchQuery = searchInput.value
    
    // check if input is empty, tell user to enter input
    if (searchInput.value === "") {
        document.querySelector("#searchError").innerText = "please enter a movie title"
    } else {
        fetch(`${url}&s=${searchQuery}`)
        .then(res => res.json())
        .then(movies => {
            console.log(movies)

            movies.Search.forEach(movie => {
                getMovieInfo(movie.Title)
            })
        })
    }
   
    searchInput.value = ""
}

// get the data for each individual movie
// pass individual movie data into the dom
function getMovieInfo(movie) {
    fetch(`${url}&t=${movie}`)
        .then(res => res.json())
        .then(film => {
            movieList.innerHTML += `
            <div class="movie-list-item">
                <img src="${film.Poster}" alt="Film poster for ${film.Title}" class="poster">
                <div class="movie-info">
                    <h3 class="title">${film.Title}</h3>
                    <p class="runtime">${film.Runtime}</p>
                    <p class="genre">${film.Genre}</p>
                    <p class="rating">${film.Ratings[0].Value}</p>
                    <p class="add-to-watchlist">+ Watchlist</p>
                </div>
            </div>
            `
        }
        )
}


