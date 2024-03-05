// script.js

// Current index of the displayed image
let currentImageIndex = -1;

// User's score
let score = 0;

// Elements from the HTML document
const gameImage = document.getElementById('gameImage');
const scoreElement = document.getElementById('score');

// Function to display the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imagesDatabase.length;
  gameImage.src = imagesDatabase[currentImageIndex];
}

// Event handling for 'Seen' button
document.getElementById('seenButton').onclick = function() {
  // Here, the correctness is randomized
  const isCorrect = Math.random() < 0.5; 

  if (isCorrect) {
    score++;
    scoreElement.textContent = 'Score: ' + score;
  } else {
    alert('Wrong! Start over.');
    score = 0;
    scoreElement.textContent = 'Score: ' + score;
  }

  // Proceed to the next image
  nextImage();
};

// Similar structure can be used for 'Not Seen' button, depending on your game's logic

// Initialize the first image when the game starts
nextImage();
