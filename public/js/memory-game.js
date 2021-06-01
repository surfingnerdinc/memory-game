const cardsColor = [
  "red",
  "blue",
  "lightblue",
  "yellow",
  "yellowgreen",
  "green",
  "brown",
  "gray",
  "lightgray",
  "red",
  "blue",
  "lightblue",
  "yellow",
  "yellowgreen",
  "green",
  "brown",
  "gray",
  "lightgray",
];

let cards = document.querySelectorAll("div");
// console.log(cards);
// change NodeList of cards to Array and check that cards are instance of Array.
cards = [...cards];
// console.log(cards);
// console.log(cards instanceof Array);
// array because we can use foreach loop

var today = new Date();
const gameStart = today.getSeconds();
console.log(gameStart);

let activeCard = ""; //currently clicked card
const activeCards = []; //array for two cards.

// how many paried cards we have
let result = 0; // to finish game should be equal cards.length / 2
const pairedCards = cards.length / 2;

const clickCard = function () {
  activeCard = this;

  // we have to prevent by double click into the same div.
  if (activeCard == activeCards[0]) return;
  activeCard.classList.remove("hidden");

  // first click
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  }

  // second click and block another
  else {
    cards.forEach((card) => card.removeEventListener("click", clickCard));
    activeCards[1] = activeCard;

    setTimeout(function () {
      if (activeCards[0].className === activeCards[1].className) {
        console.log("You win!");
        activeCards.forEach((card) => card.classList.add("off"));
        result++;
        cards = cards.filter((card) => !card.classList.contains("off")); // prevent by clicking into paired cards. Filter is removing from array 'false' items. So we have to split it by '!' and remove from array items, which contain off class.

        if (result == pairedCards) {
          const gameStop = Date().getTime();
          const gameTime = (gameStop - gameStart) / 1000;
          alert(
            `Game has been succesfully finished! Your result: ${gameTime}s.`
          );
          location.reload();
        }
      } else {
        console.log("You lose!");
        activeCards.forEach((card) => card.classList.add("hidden"));
      }
      //    activeCard = "";
      activeCards.length = 0;
      cards.forEach((card) => card.addEventListener("click", clickCard));
    }, 500);
  }
};

const colorinit = function () {
  // choose element of div Array, choose element of cardsColor array and delete it from table.

  cards.forEach((card) => {
    //name of one element(card) can be different! but in single mode of word.
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    //splice method can delete element from array. element with given id
    cardsColor.splice(position, 1);
  });
  setTimeout(function () {
    cards.forEach((card) => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 2000);
};

colorinit();
