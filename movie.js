console.log('Movie Page is loading');


var urlParams = new URLSearchParams(window.location.search);
var imdbID = urlParams.get("id");

var containerDiv = document.querySelector(".movie-container");

getMovieDetails(imdbID);
//containerDiv.innerHTML = "";


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


             var titleElement = document.createElement("span");
             titleElement.textContent = title + " (" + year + ")";
             titleElement.classList.add("title");

             var directorElement = document.createElement("span");
             directorElement.textContent = Director;
             directorElement.classList.add("director");

             var imdbrating = document.createElement("span");
             imdbrating.textContent = imdbRating;
             imdbrating.classList.add("imdbrating");

            
             favMovieDiv.appendChild(posterImg);
             favMovieDiv.appendChild(titleElement);
             favMovieDiv.appendChild(directorElement);
             favMovieDiv.appendChild(imdbrating);


             containerDiv.appendChild(favMovieDiv);




          


      } //else { //     console.log('Error:', data.Error); // }
    });
}
