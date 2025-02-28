export const emojis = ["🍎", "🍎", "🍌", "🍌", "🍒", "🍒", "🍇", "🍇"];
let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
let board = document.querySelector(".game-board");
let selectedCards = [];
let matchedPairs = 0;
console.log("game.js loaded");
export function initializeGame() {
  shuffledEmojis.forEach((emoji, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.textContent = "❓"; // Inicialmente oculta
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

export function flipCard() {
  if (selectedCards.length < 2) {
    let card = this;
    card.textContent = card.dataset.emoji;
    card.classList.add("flipped");
    selectedCards.push(card);

    if (selectedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  }
}

export function checkMatch() {
  let [card1, card2] = selectedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    matchedPairs++;
    if (matchedPairs === emojis.length / 2) {
      setTimeout(() => alert("¡Ganaste!"), 300);
    }
  } else {
    card1.textContent = "❓";
    card2.textContent = "❓";
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }
  selectedCards = [];
}
