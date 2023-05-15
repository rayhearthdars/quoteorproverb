///////////////////////////////////////////////////////////////////////
const returnToIndexPageFromFavorite = document.getElementById("returnToIndexPageFromFavorite");
// You can have a const
// const getFavoriteFromLocalStorage = JSON.parse(localStorage.getItem("favoriteMessagesArray"));
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
    // Ok I think it is bette to declare the const in this scope
    // for (const favorite of getFavoriteFromLocalStorage) {...}
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
