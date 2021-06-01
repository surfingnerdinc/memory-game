let fronts = document.querySelectorAll(".cardfront");
let backs = document.querySelectorAll(".cardback");
let cards = document.querySelectorAll(".flashcard");

cards = [...cards];
fronts = [...fronts];
backs = [...backs];
let dl = cards.length;
// console.log(cards);
// console.log(fronts);
// console.log(dl);

words = {
  Hi: "Cześć",
  Ja: "I",
  Ty: "you",
  Ona: "she",
  On: "He",
  ONO: "Does not exits",
  "Ile jest plci": "Tylko dwie",
};

data = Object.entries(words);
console.log(data[0][0]);

for (let counter = 0; counter < dl + 1; counter++) {
  console.log(counter);
  fronts[counter].innerHTML = data[counter][0];
  backs[counter].innerHTML = data[counter][1];
}

// data = Object.entries(words);
// console.log(data);

// function getRandomWord() {
//   //   randomFront = data[Math.floor(Math.random() * data.length)];
//   //   console.log(randomFront[0]);

//   cards.forEach((card) => {
//     randomFront = data[Math.floor(Math.random() * data.length)];
//     front.innerHTML = randomFront[0];
//     back.innerHTML = randomFront[1];
//   });
// }
