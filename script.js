import { soustract } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementById("buttons");

  const symbols = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "C", "=", "/"];
  symbols.forEach(sym => {
    const btn = document.createElement("button");
    btn.textContent = sym;
    buttons.appendChild(btn);
  });

  console.log("Calculatrice initialisée !");
  console.log("Exemple : 5 - 3 =", soustract(5, 3));
});
