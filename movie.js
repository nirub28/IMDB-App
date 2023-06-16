console.log("Movie Page is loading");

var urlParams = new URLSearchParams(window.location.search); // to get url 
var imdbID = urlParams.get("id");  // extract id out of url

var containerDiv = document.querySelector(".movie-container");

getMovieDetails(imdbID);

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
        var Runtime = movie.Runtime;
        var Genre = movie.Genre;
        var Plot = movie.Plot;
        var Writer = movie.Writer;
        var Actors = movie.Actors;
        var Language = movie.Language;
        var Country = movie.Country;
        var BoxOffice = movie.BoxOffice;

        // console.log('the movie is', title);

        var favMovieDiv = document.createElement("div");
        favMovieDiv.classList.add("container-div");

        var leftDiv = document.createElement("div");
        leftDiv.classList.add("leftDiv");

        var posterImg = document.createElement("img");
        posterImg.src = poster;
        posterImg.alt = title + "Poster";
        posterImg.classList.add("poster-image");

        var titleElement = document.createElement("span");
        titleElement.textContent = title + " (" + year + ")";
        titleElement.classList.add("title");

        var directorElement = document.createElement("span");
        directorElement.innerHTML =  '<b>Director:</b>' +  Director;
        directorElement.classList.add("director");

        var imdbrating = document.createElement("span");
        imdbrating.innerHTML = '<b>IMDB Rating:</b>'+ imdbRating;
        imdbrating.classList.add("imdbrating");

        var runtimeElement = document.createElement("span");
        runtimeElement.innerHTML = "<b>Runtime:</b> " + Runtime;
        runtimeElement.classList.add("runtime");

        var genreElement = document.createElement("span");
        genreElement.innerHTML = "<b>Genre:</b> " + Genre;
        genreElement.classList.add("genre");

        var plotElement = document.createElement("span");
        plotElement.innerHTML = "<b>Plot:</b> " + Plot;
        plotElement.classList.add("plot");

        var writerElement = document.createElement("span");
        writerElement.innerHTML = "<b>Writer:</b> " + Writer;
        writerElement.classList.add("writer");

        var actorsElement = document.createElement("span");
        actorsElement.innerHTML = "<b>Actors:</b> " + Actors;
        actorsElement.classList.add("actors");

        var languageElement = document.createElement("span");
        languageElement.innerHTML = "<b>Language:</b> " + Language;
        languageElement.classList.add("language");

        var countryElement = document.createElement("span");
        countryElement.innerHTML = "<b>Country: </b>" + Country;
        countryElement.classList.add("country");

        var boxOfficeElement = document.createElement("span");
        boxOfficeElement.innerHTML = "<b>Box Office:</b> " + BoxOffice;
        boxOfficeElement.classList.add("box-office");

        favMovieDiv.appendChild(posterImg);
        favMovieDiv.appendChild(leftDiv);
        leftDiv.appendChild(titleElement);
        leftDiv.appendChild(directorElement);
        leftDiv.appendChild(imdbrating);
        leftDiv.appendChild(runtimeElement);
        leftDiv.appendChild(genreElement);
        favMovieDiv.appendChild(plotElement);
        leftDiv.appendChild(writerElement);
        leftDiv.appendChild(actorsElement);
        leftDiv.appendChild(languageElement);
        leftDiv.appendChild(countryElement);
        leftDiv.appendChild(boxOfficeElement);
        


        containerDiv.appendChild(favMovieDiv);
      } //else { //     console.log('Error:', data.Error); // }
    });
}
