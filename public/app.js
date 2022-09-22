//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 5;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
    { imgSrc: "./images/Capture.png", name:"pentagon"},
    { imgSrc: "./images/Capture1.png", name:"square"},
    { imgSrc: "./images/Capture2.png", name:"circle"},
    { imgSrc: "./images/Capture3.png", name:"fancytriangle"},
    { imgSrc: "./images/Capture4.png", name:"upsidedowntriangle"},
    { imgSrc: "./images/Capture5.png", name:"threetriangles"},
    { imgSrc: "./images/Capture6.png", name:"flatsquare"},
    { imgSrc: "./images/Capture7.png", name:"threesquares"},
    { imgSrc: "./images/Capture.png", name:"pentagon"},
    { imgSrc: "./images/Capture1.png", name:"square"},
    { imgSrc: "./images/Capture2.png", name:"circle"},
    { imgSrc: "./images/Capture3.png", name:"fancytriangle"},
    { imgSrc: "./images/Capture4.png", name:"upsidedowntriangle"},
    { imgSrc: "./images/Capture5.png", name:"threetriangles"},
    { imgSrc: "./images/Capture6.png", name:"flatsquare"},
    { imgSrc: "./images/Capture7.png", name:"threesquares"},
];

//Randomize
const randomize = () => {
const cardData = getData();
cardData.sort(() => Math.random() - 0.5);
return cardData;
};

//Card Generator Function
const cardGenerator = () => {
const cardData = randomize();
//Generate the Html

cardData.forEach((item) => {
const card = document.createElement("div");
const face = document.createElement("img");
const back = document.createElement("div");
card.classList = "card";
face.classList = "face";
back.classList = "back";
//Attach the infro to the cards
face.src = item.imgSrc;
card.setAttribute("name", item.name);
//Attach the card to the section
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

card.addEventListener("click", (e) => {
    card.classList.toggle("toggleCard");
    checkCards(e);
});

});
};

//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(clickedCard);
    //Logic
    if(flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else{
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart();
            }
        }
    }
};

//Restart
const restart = () => {
    let cardData = randomize ();
    let faces = document.querySelectorAll("face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
//Randomize
setTimeout(() =>{
    cards[index].style.pointerEvents = "all";
faces[index].source = item.imgSrc;
cards[index].setAttribute("name", item.name);
}, 1000);
    });
    playerLives = 5;
    playerLivesCount.textContent = playerLives;
};


cardGenerator();