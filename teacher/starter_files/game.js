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

// SETUP:
// You may want to initialize some variables here that can be shared between the functions below

function handleRollStart(event) {
  // What should happen when the user starts to move roll their finger along the cup?
  // HINT: the event has a pageY property that will tell you where they are on the screen.
}

function handleRollMovement(event) {
  // This function exists to increment the data-frame attribute on the cup,
  // advancing the animation
  // You only want to advance it if certain conditions have been met:
  // 1. the user started the movement on the cup
  // 2. the user has moved their finger up a certain distance
  // 3. The user is not on the last frame
}

function handleRollEnd() {
  // If the user if on the last frame...
  // ... and the user started their movement on the cup...
  // ... then, they win!
  //
  // Change the primary text to say "Congrats!"
  // Pick a random prize from the prizes array
  // Change the secondary text and the prize image to match
  // Hide the cup, show the confetti and the prize
}

cup.addEventListener("mousedown", handleRollStart);
cup.addEventListener("touchstart", handleRollStart);

document.addEventListener("mousemove", handleRollMovement);
document.addEventListener("touchmove", handleRollMovement);

document.addEventListener("mouseup", handleRollEnd);
document.addEventListener("touchend", handleRollEnd);
