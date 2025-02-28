import { initializeGame } from "./game.js";
console.log("main.js loaded");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  initializeGame();
});
