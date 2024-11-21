const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newBtn = document.querySelector("#new-btn");
const turn = document.querySelector(".turn");
let turnx = true; // Turnx True = X Turn
// Winning Pattern
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Event lisner
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnx) {
      box.innerHTML = "X";
      box.disabled = true;
      turn.innerHTML = "Turn: O";
      turnx = false;
    } else {
      box.innerHTML = "O";
      box.disabled = true;
      turn.innerHTML = "Turn: X";
      turnx = true;
    }

    winner();
  });
});

// Winner Display
const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ' ${winner} '`;
  msgContainer.classList.remove("hide");
  turn.innerHTML = "";

  for (box of boxes) {
    box.disabled = true;
  }
};

// Winner Checker
const winner = () => {
  for (let pattern of winPatterns) {
    val1 = boxes[pattern[0]].innerText;
    val2 = boxes[pattern[1]].innerText;
    val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

// Reset Button Logic
const resetBtn = () => {
  for (box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
    turn.innerHTML = "Turn: X";
    turnx = true;
  }

  msgContainer.classList.add("hide");
};

// Button Event Listener
reset.addEventListener("click", resetBtn);
newBtn.addEventListener("click", resetBtn);
