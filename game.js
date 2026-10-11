
let score = 0;
let answered = false;

function answer(correct) {
  if (answered) return;

  answered = true;

  if (correct) {
    score += 10;
    document.getElementById("feedback").textContent =
      "¡Correcto! Has ganado 10 puntos.";
  } else {
    document.getElementById("feedback").textContent =
      "Respuesta incorrecta. ¡Sigue intentándolo!";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("next").hidden = false;
}

function nextQuestion() {
  document.getElementById("question").textContent =
    "¿Cuánto es 5 × 3?";

  const answers = document.getElementById("answers");

  answers.innerHTML = `
    <button onclick="answer(false)">10</button>
    <button onclick="answer(true)">15</button>
    <button onclick="answer(false)">20</button>
    <button onclick="answer(false)">25</button>
  `;

  document.getElementById("feedback").textContent =
    "Elige una respuesta.";

  document.getElementById("next").hidden = true;
  answered = false;
}
