const searchBtn = document.querySelector("#search-button")
const searchInput = document.querySelector("#search")
const movieList = document.querySelector("#movie-list")
const movieTitle = document.querySelector(".title")
const url = `http://www.omdbapi.com/?apikey=396f1f1a`

searchBtn.addEventListener("click", getMovieList)

function getMovieList() {
    const searchQuery = searchInput.value

    fetch(`${url}&s=${searchQuery}`)
        .then(res => res.json())
        .then(movies => {
            console.log(movies)
            movieList.innerHTML = ""

            movies.Search.map(movie => {
                console.log(movie)
                movieList.innerHTML += `
                <div class="movie-list-item">
                    <img src="${movie.Poster}" alt="">
                    <h3 class="title">${movie.Title}</h3>
                </div>
                `
            })
        })
}

function getMovieInfo() {
    fetch(`${url}&t=${searchQuery}`)
        .then(res => res.json())
        .then(data => console.log(data))
}


