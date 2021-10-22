const cells = document.querySelectorAll(`[data-cell]`);
const x_Class = `x`;
const circle_Class = `circle`;
const board = document.querySelector(`#board`);
const messageContainer = document.getElementById(`winning-message`);
const message = document.querySelector(`[data-winning-message-text]`);
const restart = document.getElementById(`restartButton`);
let currentCircle;
startGame();
console.log(cells[3]);
function startGame() {
  messageContainer.classList.remove(`show`);
  cells.forEach((c) => {
    c.classList.remove(x_Class);
    c.classList.remove(circle_Class);
    c.removeEventListener(`click`, handler);
    c.addEventListener(`click`, handler, { once: true });
  });
  setBoardHover();
}
function handler(e) {
  let currentClass = currentCircle ? circle_Class : x_Class;
  e.target.classList.add(currentClass);
  if (checkWinner(currentClass)) {
    endGame(false);
    console.log(1);
  } else if (checkDraw()) {
    console.log(2);
    endGame(true);
  } else {
    switchPlayer();
    setBoardHover();
  }
}
function checkWinner(currentClass) {
  return winningss.some((combos) => {
    return combos.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}
function checkDraw(currentClass) {
  return [...cells].every(
    (c) => c.classList.contains(x_Class) || c.classList.contains(circle_Class)
  );
}
function endGame(draw) {
  messageContainer.classList.add(`show`);
  if (draw) {
    message.textContent = `DRAW!`;
  } else {
    message.textContent = currentCircle ? `O's Won` : `X's Won`;
  }
}
function switchPlayer() {
  currentCircle = !currentCircle;
  console.log(currentCircle);
}
function setBoardHover() {
  board.classList.remove(x_Class);
  board.classList.remove(circle_Class);
  if (currentCircle) {
    board.classList.add(circle_Class);
  } else {
    board.classList.add(x_Class);
  }
}
const winningss = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
restart.addEventListener(`click`, startGame);
