const cardsArray = [
    {
        name: 'fries', 
        img: 'images/french-fries.png'
    },
    {
        name: 'cheeseburger', 
        img: 'images/cheese-burger.png'
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png'
    },
    {
        name: 'juice', 
        img: 'images/juice.png'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    },
    {
        name: 'fries', 
        img: 'images/french-fries.png'
    },
    {
        name: 'cheeseburger', 
        img: 'images/cheese-burger.png'
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png'
    },
    {
        name: 'juice', 
        img: 'images/juice.png'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    },
]

cardsArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid'); 
const resultDisplay = document.querySelector('#result'); 
let cardChosen = [];
let cardChosenId = []; 
const cardsWon = []; 

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++){
        const card = document.createElement('img'); 
        card.setAttribute('src', 'images/rainbow.png'); 
        card.setAttribute('data-id', i); 
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard(); 

function checkMatch() {
    const cards = document.querySelectorAll('img'); 
    const optionOneId = cardChosenId[0]; 
    const optionTwoId = cardChosenId[1]; 
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/rainbow.png'); 
        cards[optionTwoId].setAttribute('src', 'images/rainbow.png'); 
        alert("You have clicked the same image")
    }

    if(cardChosen[0] == cardChosen[1]){
        alert("You found a match"); 
        cards[optionOneId].setAttribute('src', 'images/white.png'); 
        cards[optionTwoId].setAttribute('src', 'images/white.png'); 

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardsWon.push(cardChosen);
    }else {
        cards[optionOneId].setAttribute('src', 'images/rainbow.png'); 
        cards[optionTwoId].setAttribute('src', 'images/rainbow.png'); 
        alert("Sorry try again");
    }

    resultDisplay.innerText = cardsWon.length; 

    cardChosen = [];
    cardChosenId = [];

    if(cardsWon.length == cardsArray.length/ 2) {
        resultDisplay.innerText = 'Congratulations, you found them all.'; 
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id'); 
    cardChosen.push(cardsArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}