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
let rolling = false;
let rollStartY;

function handleRollStart(event) {
  event.preventDefault();
  rolling = true;
  // mouse uses screenY and touch uses pageY
  rollStartY = event.screenY || event.pageY;
}

function handleRollMovement(event) {
  frame = Number(cup.dataset.frame);
  const rollY = event.screenY || event.pageY;
  if (
    rolling &&
    frame < TOTAL_FRAMES &&
    rollStartY - rollY >= FRAME_CHANGE_THRESHOLD
  ) {
    rollStartY = rollY;
    cup.dataset.frame++;
  }
}

function handleRollEnd() {
  rolling = false;
  frame = Number(cup.dataset.frame);
  if (frame === TOTAL_FRAMES && !cup.classList.contains("hidden")) {
    primary.textContent = "Congrats!";
    const randomPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    prize.src = `images/${randomPrize.image}.png`;
    secondary.textContent = randomPrize.text;
    // hide cup, show confetti and prize
    [cup, confetti, prize].forEach(image => image.classList.toggle("hidden"));
  }
}

cup.addEventListener("mousedown", handleRollStart);
cup.addEventListener("touchstart", handleRollStart);

document.addEventListener("mousemove", handleRollMovement);
document.addEventListener("touchmove", handleRollMovement);

document.addEventListener("mouseup", handleRollEnd);
document.addEventListener("touchend", handleRollEnd);
