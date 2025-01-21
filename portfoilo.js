const Text = document.getElementById("Text");
const texts = [
  "<span class='name'>R PRANAV YADAV</span>",
  "<span class='skill'>Developer</span>",
];
let currentTextIndex = 0;
let charIndex = 0;

function typeEffect() {
  const currentText = texts[currentTextIndex];
  Text.innerHTML = currentText.slice(0, charIndex);

  if (charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100); // Typing speed
  } else {
    // Pause before deleting
    setTimeout(deleteEffect, 1000); // Pause for 1 second
  }
}

function deleteEffect() {
  const currentText = texts[currentTextIndex];
  Text.innerHTML = currentText.slice(0, charIndex);

  if (charIndex > 0) {
    charIndex--;
    setTimeout(deleteEffect, 50); // Deleting speed
  } else {
    // Switch to the next text
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(typeEffect, 500); // Pause before typing next text
  }
}

// Start the typing effect
typeEffect();
