const FRAME_CHANGE_THRESHOLD = 30;
const TOTAL_FRAMES = 13;
const PRIZES = [
  {
    image: "ballot",
    text: "You have been entered into a drawing for $100,000!"
  },
  {
    image: "coffee",
    text: "You won a free coffee!"
  },
  {
    image: "donut",
    text: "You won a free dream donut!"
  },
  {
    image: "hyundai",
    text: "You won a Hyundai Ioniq!"
  },
  {
    image: "timscard",
    text: "You won a $25 Timscard!"
  }
];

let frame = Number(cup.dataset.frame);
let rollYAxis;

function handleRollStart(event) {
  event.preventDefault();
  rollYAxis = event.pageY;
}

function handleRollMovement(event) {
  frame = Number(cup.dataset.frame);
  if (
    rollYAxis &&
    rollYAxis - event.pageY >= FRAME_CHANGE_THRESHOLD &&
    frame < TOTAL_FRAMES
  ) {
    rollYAxis = event.pageY;
    cup.dataset.frame++;
  }
}

function handleRollEnd() {
  frame = Number(cup.dataset.frame);
  if (frame === TOTAL_FRAMES && rollYAxis) {
    primary.textContent = "Congrats!";
    const randomPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    prize.src = `images/${randomPrize.image}.png`;
    secondary.textContent = randomPrize.text;
    // hide cup, show confetti and prize
    [cup, confetti, prize].forEach(image => image.classList.toggle("hidden"));
  }
  rollYAxis = undefined;
}

cup.addEventListener("mousedown", handleRollStart);
cup.addEventListener("touchstart", handleRollStart);

document.addEventListener("mousemove", handleRollMovement);
document.addEventListener("touchmove", handleRollMovement);

document.addEventListener("mouseup", handleRollEnd);
document.addEventListener("touchend", handleRollEnd);
