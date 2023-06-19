const words = ["Student", "Software Engineer", "Developer", "Designer", "Writer"];
const wordFlipElement = document.getElementById("word-flip");

let currentIndex = 0;
let currentWord = words[currentIndex];
let currentCharacterIndex = 0;
let isDeleting = false;

function typeWriterEffect() {
  const word = words[currentIndex];

  if (isDeleting) {
    wordFlipElement.textContent = word.substring(0, currentCharacterIndex);
    currentCharacterIndex--;

    if (currentCharacterIndex < 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % words.length;
      currentWord = words[currentIndex];
      setTimeout(typeWriterEffect, 500); // Adjust the delay after deleting a word
    } else {
      setTimeout(typeWriterEffect, 100); // Adjust the typing speed while deleting
    }
  } else {
    wordFlipElement.textContent = word.substring(0, currentCharacterIndex);
    currentCharacterIndex++;

    if (currentCharacterIndex > word.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 1000); // Adjust the delay after typing a word
    } else {
      setTimeout(typeWriterEffect, 200); // Adjust the typing speed
    }
  }
}

typeWriterEffect();

