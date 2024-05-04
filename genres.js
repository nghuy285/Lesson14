function filterGamesByGenre() {
  let genreFilter = JSON.parse(
    localStorage.getItem("genreDetail")
  ).title.toUpperCase();
  let div = document.getElementById("myDIV");
  let games = div.getElementsByClassName("gameContainer");

  for (let i = 0; i < games.length; i++) {
    let gameGenre = games[i].getElementsByTagName("h2")[0];
    if (gameGenre) {
      let gameGenreText = gameGenre.textContent || gameGenre.innerText;

      if (gameGenreText.toUpperCase() === genreFilter) {
        games[i].style.display = "";
        games[i].classList.add("genres");
      } else {
        games[i].style.display = "none";
      }
    } else {
      games[i].style.display = "none";
    }
  }
}
function searchInGenre() {
  let genreFilter = JSON.parse(
    localStorage.getItem("genreDetail")
  ).title.toUpperCase();
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let div = document.getElementById("myDIV");
  let games = div.getElementsByClassName("gameContainer");

  for (let i = 0; i < games.length; i++) {
    let gameGenre = games[i].getElementsByTagName("h2")[0];
    let gameName = games[i].getElementsByTagName("p")[0];
    if (gameGenre && gameName) {
      let gameGenreText = gameGenre.textContent || gameGenre.innerText;
      let gameNameText = gameName.textContent || gameName.innerText;

      if (
        gameGenreText.toUpperCase() === genreFilter &&
        gameNameText.toUpperCase().indexOf(filter) > -1
      ) {
        games[i].style.display = "";
      } else {
        games[i].style.display = "none";
      }
    } else {
      games[i].style.display = "none";
    }
  }
}

document.getElementById("myInput").addEventListener("input", function () {
  if (this.value === "") {
    filterGamesByGenre();
  } else {
    searchInGenre();
  }
});
window.onload = function () {
  let savedGenreDetail = JSON.parse(localStorage.getItem("genreDetail"));
  document.getElementById("title").textContent = savedGenreDetail.title;
  details();
  filterGamesByGenre();
};
