///////////////////////////////////////////////////////////////////////
const returnToIndexPageFromFavorite = document.getElementById("returnToIndexPageFromFavorite");
let getFavoriteFromLocalStorage = localStorage.getItem("favoriteMessagesArray");
getFavoriteFromLocalStorage = JSON.parse(getFavoriteFromLocalStorage);
const favoriteMessageBoard = document.getElementById("favoriteMessageBoard");

///////////////////////////////////////////////////////////////////////////////
//return to HomePage

const returnToHomePage = () => {
    window.location = "./index.html";
};


//////////////////////////////////////////////////////////////////////////
//display messages

const displayMessageOnFavoritePage = () => {
    for (favorite of getFavoriteFromLocalStorage) {
        let newFavorite = document.createElement("p");
        newFavorite.className = "favoriteSentences";
        favoriteMessageBoard.appendChild(newFavorite);
        returnToIndexPageFromFavorite.before(newFavorite);
        newFavorite.textContent = favorite;
    }
};

///////////////////////////////////////////////////////////////////////
//Function Call

returnToIndexPageFromFavorite.addEventListener("click", returnToHomePage);
displayMessageOnFavoritePage();
