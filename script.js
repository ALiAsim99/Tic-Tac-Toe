let currentPlayer = `X`;
let gameScore = [``, ``, ``, ``, ``, ``, ``, ``, ``];
let isGame = true;
const cells = document.querySelectorAll(`.cell`);
cells.forEach((c) =>
  c.addEventListener(`click`, (e) => {
    e.target.textContent = currentPlayer;
    e.target.disabled = true;

    gameScore.shift();
    gameScore.push(currentPlayer);
    currentPlayer = currentPlayer == `X` ? `O` : `X`;
    getWinner();
  })
);

const cell1 = document.querySelector(`div[data-cell="1"]`);
const cell2 = document.querySelector(`div[data-cell="2"]`);
const cell3 = document.querySelector(`div[data-cell="3"]`);
const cell4 = document.querySelector(`div[data-cell="4"]`);
const cell5 = document.querySelector(`div[data-cell="5"]`);
const cell6 = document.querySelector(`div[data-cell="6"]`);
const cell7 = document.querySelector(`div[data-cell="7"]`);
const cell8 = document.querySelector(`div[data-cell="8"]`);
const cell9 = document.querySelector(`div[data-cell="9"]`);
console.log(cell1.textContent);
function getWinner() {
  console.log(`called`, gameScore);
  if (
    cell1.textContent == `X` &&
    cell5.textContent == `X` &&
    cell9.textContent == `X`
  ) {
    console.log(`winner`);
  }
}
