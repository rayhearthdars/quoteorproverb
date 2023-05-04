const dataQuote = [
	{id: 0, type: "quote", message: "A vaincre sans péril, on triomphe sans gloire"}, 
	{id: 1, type: "quote", message: "Tout est au mieux dans le meilleur des mondes"}, 
	{id: 2, type: "quote", message: "L'imagination est plus importante que le savoir"}, 
	{id: 3, type: "quote", message: "Un problème sans solution est un problème mal posé"}, 
]
const dataProverb = [
    { id: 4, type: "proverb", message: "Paix et tranquillité, voilà le bonheur." }, 
	{id: 5, type: "proverb", message: "La patience est un arbre dont la racine est amère, et dont les fruits sont très doux."}, 
	{id: 6, type: "proverb", message: "On apprend peu par la victoire, mais beaucoup par la défaite."},
	{id: 7, type: "proverb", message: "Avec du temps et de la patience, on vient à bout de tout."}
];

const submit = document.getElementById('submit');

const displayMessage = (e) => {
    e.preventDefault();
    const questionMark = document.getElementsByClassName('questionMark').item(0);
    const answerMessage = document.getElementsByClassName('answerMessage').item(0);
    const radioQuote = document.getElementById('quote');
    const answer = document.getElementsByClassName('answer').item(0);

    if (questionMark.style.display === 'flex') {
        questionMark.style.display = 'none';
        answer.style.display = 'flex';

        // if (radioQuote.hasAttribute('checked')) {
        //     let messages = [];
        //     for (data of dataQuote) {
        //         messages.push(data.message);
        //     }
        //     console.log(messages);
        //     answerMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        // }
        // else {
        //     let messages = [];
        //     for (data of dataProverb) {
        //         messages.push(data.message);
        //     }
        //     console.log(messages);
        //     answerMessage.textContent = messages[Math.floor(Math.random() * messages.length)];        
        // }   
    }
    else {
        questionMark.style.display = 'flex';
        answer.style.display = 'none';
        }
};

submit.addEventListener('click', displayMessage)
