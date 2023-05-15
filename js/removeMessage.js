const returnToIndexPageFromRemove = document.getElementById("returnToIndexPageFromRemove");
const removeMessageBoard = document.getElementById("removeMessageBoard");
const removeMessagesButton = document.getElementById("removeMessagesButton");

/////////////////////////////////////////////////////////////////////////
//Return to Homepage

const returnToHomePage = () => {
    window.location = "./index.html";
};

/////////////////////////////////////////////////////////////////////////
// display form to remove messages

const createInputCheckboxForMessages = () => {
    // You could have stored the result in a variable, so you won't need to call the API twice
    // const currFavorites = localStorage.getItem("newMessage");
    // if (currFavorites !== null) {...}
    if (localStorage.getItem("newMessage") !== null) {
        let newMessage = localStorage.getItem("newMessage");
        newMessage = JSON.parse(newMessage);

        for (let i = 0; i < newMessage.length; i++) {
            let divContainer = document.createElement("div");
            divContainer.className = "divContainer";
            removeMessageBoard.appendChild(divContainer);
            removeMessagesButton.before(divContainer);

            let newMessageCheckbox = document.createElement("input");
            divContainer.appendChild(newMessageCheckbox);

            newMessageCheckbox.type = "checkbox";
            newMessageCheckbox.id = `newMessageCheckbox${i}`;
            newMessageCheckbox.name = "newMessageCheckbox";
            newMessageCheckbox.value = newMessage[i].message;

            let newLabel = document.createElement("label");
            divContainer.appendChild(newLabel);

            newLabel.for = newMessageCheckbox.id;
            newLabel.textContent = newMessage[i].message;
        }
    }
};

/////////////////////////////////////////////////////////////////
// remove the messages you added on button submit

const removeMessagesAddedOnSubmit = () => {
    let newMessageCheckboxInputs = document.getElementsByName("newMessageCheckbox");

    // You could have done this in one line 
    // const newMessages = JSON.parse(localStorage.getItem("newMessage"));
    let newMessage = localStorage.getItem("newMessage");
    newMessage = JSON.parse(newMessage);

    let newDataMessages = localStorage.getItem("newDataMessages");
    newDataMessages = JSON.parse(newDataMessages);

    let favoriteMessagesArray = localStorage.getItem("favoriteMessagesArray");
    favoriteMessagesArray = JSON.parse(favoriteMessagesArray);

    // The forEach method helps you in writing less code and is relevant in that case
    for (let i = 0; i < newMessageCheckboxInputs.length; i++) {
        if (newMessageCheckboxInputs[i].checked === true) {
            newDataMessages = newDataMessages.filter((el) => el.message !== newMessageCheckboxInputs[i].value);
            newMessage = newMessage.filter((el) => el.message !== newMessageCheckboxInputs[i].value);
            favoriteMessagesArray = newMessage.filter((el) => el.message !== newMessageCheckboxInputs[i].value);
        }
    }
    localStorage.setItem("newMessage", JSON.stringify(newMessage));
    localStorage.setItem("newDataMessages", JSON.stringify(newDataMessages));
    localStorage.setItem("favoriteMessagesArray", JSON.stringify(favoriteMessagesArray));
};

//////////////////////////////////////////////////////////////////////////////
//Function call

returnToIndexPageFromRemove.addEventListener("click", returnToHomePage);
window.addEventListener("load", createInputCheckboxForMessages);
removeMessageBoard.addEventListener("submit", removeMessagesAddedOnSubmit);
