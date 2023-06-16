console.log("Testing fav tab");

var containerDiv = document.querySelector(".container");

getFavMovies();  // load all fav  movies in LS

function getFavMovies() {
  var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  containerDiv.innerHTML = "";

  if (favoriteMovies.length > 0) {       
        favoriteMovies.map((movie) => {
       // console.log('idddd is= ',movie.imdbID )
      getMovieDetails(movie.imdbID);
    });
  }
}

//to remove movie from local storage
function removeFromFavorites(imdbID) {
    var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    var updatedMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedMovies));
    getFavMovies();
  }

function getMovieDetails(imdbID) {
  var URL = "https://www.omdbapi.com/?apikey=3ca5df7&i=" + imdbID;

  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.Response === "True") {
        var movie = data;
          
          var title = movie.Title;
          var year = movie.Year;
          var imdbID = movie.imdbID;
          var poster = movie.Poster;
          var imdbRating = movie.imdbRating;
          var Director = movie.Director;


         // console.log('the movie is', title);

             var favMovieDiv = document.createElement("div");
             favMovieDiv.classList.add("container-div");


             var posterImg = document.createElement("img");
             posterImg.src = poster;
             posterImg.alt = title + "Poster";
             posterImg.classList.add("poster-image"); 

             var flexContainer = document.createElement("div");
             flexContainer.classList.add("flex-div");

             var titleElement = document.createElement("span");
             titleElement.textContent = title + " (" + year + ")";
             titleElement.classList.add("title");

             var directorElement = document.createElement("span");
             directorElement.textContent = 'Director:-' + " " + Director;
             directorElement.classList.add("director");

             var imdbrating = document.createElement("span");
             imdbrating.textContent ='IMDB Rating:' + " " + imdbRating;
             imdbrating.classList.add("imdbrating");


             var favoriteButton = document.createElement("button");
             favoriteButton.textContent = "UnFavourite";
             favoriteButton.value =imdbID;
             favoriteButton.classList.add("favorite-button");

             favoriteButton.addEventListener("click", function () {
                  removeFromFavorites(imdbID);
                  favoriteButton.textContent = "Favorite";  
              });
            
              favMovieDiv.appendChild(posterImg);
             flexContainer.appendChild(titleElement);
             flexContainer.appendChild(directorElement);
             flexContainer.appendChild(imdbrating);
             favMovieDiv.appendChild(favoriteButton);
             favMovieDiv.appendChild(flexContainer);
             


             containerDiv.appendChild(favMovieDiv);




          


      } //else { //     console.log('Error:', data.Error); // }
    });
}
