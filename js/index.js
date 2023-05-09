const data = [
    {
        id: 0,
        type: "quote",
        message: "A vaincre sans péril, on triomphe sans gloire",
    },
    {
        id: 1,
        type: "quote",
        message: "Tout est au mieux dans le meilleur des mondes",
    },
    {
        id: 2,
        type: "quote",
        message: "L'imagination est plus importante que le savoir",
    },
    {
        id: 3,
        type: "quote",
        message: "Un problème sans solution est un problème mal posé",
    },
    {
        id: 4,
        type: "proverb",
        message: "Paix et tranquillité, voilà le bonheur.",
    },
    {
        id: 5,
        type: "proverb",
        message: "La patience est un arbre dont la racine est amère, et dont les fruits sont très doux.",
    },
    {
        id: 6,
        type: "proverb",
        message: "On apprend peu par la victoire, mais beaucoup par la défaite.",
    },
    {
        id: 7,
        type: "proverb",
        message: "Avec du temps et de la patience, on vient à bout de tout.",
    },
];

const resetButton = document.getElementsByClassName("resetButton").item(0);
const submitButton = document.getElementById("submit");
const addForm = document.getElementsByClassName("addButton").item(0);
const submitMessage = document.getElementById("submitMessage");
const createNewMessage = document.getElementById("createNewMessage");
const addMessage = document.getElementById("addMessage");
const submitForm = document.getElementById("submitForm");
const questionMark = document.getElementsByClassName("questionMark").item(0);
const answerMessage = document.getElementsByClassName("answerMessage").item(0);
const radioQuote = document.getElementById("quote");
const radioProverb = document.getElementById("proverb");
const answer = document.getElementsByClassName("answer").item(0);
const removeButton = document.getElementsByClassName("removeButton").item(0);
const favoriteBtn = document.getElementsByClassName("favorite").item(0);
let favoriteMessagesArray = [];
const seeFavoriteBtn = document.getElementsByClassName("seeFavorite").item(0);
const clearFavoriteBtn = document.getElementsByClassName("clearFavorite").item(0);

//////////////////////////////////////////////////////////////////////
//Make message disappear on click of reset Button

const reset = () => {
    if (answerMessage.textContent !== null) {
        submitButton.disabled = false;
        createNewMessage.style.display = "none";
        answerMessage.textContent = "";
        answer.style.display = "none";
        questionMark.style.display = "flex";
    }
};

//////////////////////////////////////////////////////////////////////////
// Add message and add it to start array (data)

if (JSON.parse(localStorage.getItem("newMessage")) !== null) {
    var newMessage = JSON.parse(localStorage.getItem("newMessage"));
    console.log(newMessage);
    var newDataMessages = JSON.parse(localStorage.getItem("newDataMessages"));
} else {
    var newMessage = [];
    var newDataMessages = data;
}

const formAppears = () => {
    createNewMessage.style.display = "flex";
    questionMark.style.display = "none";
    answer.style.display = "none";
};

const submitTheNewMessage = (ev) => {
    ev.preventDefault();
    let addQuoteOrProverbValue = document.getElementById("addQuoteOrProverb");
    addQuoteOrProverbValue = addQuoteOrProverbValue.value;
    let addMessageValue = document.getElementById("createNewMessage");
    addMessageValue = addMessage.value;

    const newMessageObject = {
        id: newDataMessages.length,
        type: addQuoteOrProverbValue,
        message: addMessageValue,
    };
    newMessage.push(newMessageObject);
    newDataMessages.push(newMessageObject);

    localStorage.setItem("newMessage", JSON.stringify(newMessage));
    localStorage.setItem("newDataMessages", JSON.stringify(newDataMessages));

    let lastMessage = JSON.parse(localStorage.getItem("newMessage"));
    lastMessage = lastMessage[lastMessage.length - 1].message;

    createNewMessage.style.display = "none";
    questionMark.style.display = "none";
    answer.style.display = "flex";
    answerMessage.textContent = lastMessage;
    addMessage.value = "";
};

////////////////////////////////////////////////////////////////////////////
//Make message of el from array of object appear on click

const displayMessage = (ev) => {
    ev.preventDefault();
    createNewMessage.style.display = "none";
    questionMark.style.display = "none";
    answer.style.display = "flex";

    if (radioQuote.checked === true) {
        let filteredData = newDataMessages.filter((el) => el.type === "quote");
        console.log("hy2");
        answerMessage.textContent = filteredData[Math.floor(Math.random() * filteredData.length)].message;
    }

    if (radioProverb.checked === true) {
        let filteredData = newDataMessages.filter((el) => el.type === "proverb");
        console.log("hy3");
        answerMessage.textContent = filteredData[Math.floor(Math.random() * filteredData.length)].message;
    }
    submitButton.disabled = true;
};

///////////////////////////////////////////////////////////////////////////
// send to new page to clear data from the new messages added

const sendToRemovePage = () => {
    window.location = "./removeMessage.html";
};

///////////////////////////////////////////////////////////////////////////
// add favorite message to localStorage

const addFavoriteToLocalStorage = () => {
    if (answerMessage.textContent !== "") {
        let favoriteMessage = answerMessage.textContent;
        favoriteMessagesArray.push(favoriteMessage);
        localStorage.setItem("favoriteMessagesArray", JSON.stringify(favoriteMessagesArray));
        reset();
    }
};

///////////////////////////////////////////////////////////////////////////
// send user to new page on click of seeFavorite button

const changePage = () => {
    window.location = "./favoriteMessages.html";
};

///////////////////////////////////////////////////////////////////////////
// clear favorite from localStorage

const clearFavoriteInLocalStorage = () => {
    localStorage.removeItem("favoriteMessagesArray");
};

///////////////////////////////////////////////////////////////////////////
//Function call

resetButton.addEventListener("click", reset);
addForm.addEventListener("click", formAppears);
createNewMessage.addEventListener("submit", submitTheNewMessage);
submitForm.addEventListener("submit", displayMessage);
removeButton.addEventListener("click", sendToRemovePage);
favoriteBtn.addEventListener("click", addFavoriteToLocalStorage);
seeFavoriteBtn.addEventListener("click", changePage);
clearFavoriteBtn.addEventListener("click", clearFavoriteInLocalStorage);
