console.log("Testing...");

var inputElement = document.querySelector(".movie-search");
var resultsContainer = document.querySelector(".search-results");

inputElement.addEventListener("keyup", function (event) {
  var input = event.target.value;
  resultsContainer.innerHTML = ""; // clear prev data
  if (input.length > 0) {
    searchMovies(input);
  }

  if (event.keyCode === 13) {
    inputElement.value = "";  // clear input box
  }
});

function addToFavorites(imdbID) {
  var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  var existingMovie = favoriteMovies.find(movie => movie.imdbID === imdbID);

  if (existingMovie) {
    favoriteMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
  } else {
    var movie = {
      imdbID: imdbID,
    };
    favoriteMovies.push(movie);
  }

  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
}


function removeFromFavorites(imdbID) {
  var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  var updatedMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedMovies));
}

// function displayFavoriteMovies() {
//   var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  
//   favoriteMovies.forEach((movie) => {
//     var imdbID = movie.imdbID;
//     var favoriteButton = document.querySelector(`button[value="${imdbID}"]`);
    
//     if (favoriteButton) {
//       favoriteButton.textContent = "Unfavorite";
//     }
//   });
// }

 
function searchMovies(input) {
  var URL = "https://www.omdbapi.com/?apikey=3ca5df7&s=" + input;

  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.Response === "True") {
        var movies = data.Search;
        movies.forEach((movie) => {
          var title = movie.Title;
          var year = movie.Year;
          var imdbID = movie.imdbID;
          var poster = movie.Poster;

          var containerDiv = document.createElement("div");
          containerDiv.classList.add("movie-result");

          var posterImg = document.createElement("img");
          posterImg.src = poster;
          posterImg.alt = title + "Poster";
          posterImg.classList.add("poster-image"); // Create movie details elements
          
          var titleElement = document.createElement("span");
          titleElement.textContent = title + " (" + year + ")";
          titleElement.classList.add("title");

          var favoriteButton = document.createElement("button");

          
          var favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
          var existingMovie = favoriteMovies.find(movie => movie.imdbID === imdbID);


          if (existingMovie) {
            favoriteButton.textContent = "Unfavorite";
          } else {
            favoriteButton.textContent = "Favorite";
          }

          favoriteButton.value = imdbID;
          favoriteButton.classList.add("favorite-button");

          favoriteButton.addEventListener("click", function () {
            if (existingMovie) {
              removeFromFavorites(imdbID);
              favoriteButton.textContent = "Favorite";
            } else {
              addToFavorites(imdbID);
              favoriteButton.textContent = "Unfavorite";
            }

            //displayFavoriteMovies();
          });
          

          containerDiv.appendChild(posterImg);
          containerDiv.appendChild(titleElement);
          containerDiv.appendChild(favoriteButton); // Append movie result container to the search results container
          resultsContainer.appendChild(containerDiv);
          
        });
      } //else { //     console.log('Error:', data.Error); // }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
