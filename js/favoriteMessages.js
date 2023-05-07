///////////////////////////////////////////////////////////////////////////////
//return to HomePage

const returnToIndexPageFromFavorite = document.getElementById("returnToIndexPageFromFavorite");

returnToIndexPageFromFavorite.addEventListener("click", () => {
    window.location = "/Users/Gabri/Documents/Konexio/quoteorproverb/index.html";
});

//////////////////////////////////////////////////////////////////////////
//display messages

let getFavoriteFromLocalStorage = localStorage.getItem("favoriteMessagesArray");
getFavoriteFromLocalStorage = JSON.parse(getFavoriteFromLocalStorage);
const favoriteMessageBoard = document.getElementById("favoriteMessageBoard");


for (favorite of getFavoriteFromLocalStorage) {
    let newFavorite = document.createElement("p");
    newFavorite.className = "favoriteSentences";
    favoriteMessageBoard.appendChild(newFavorite);
    returnToIndexPageFromFavorite.before(newFavorite);
    newFavorite.textContent = favorite;
}
