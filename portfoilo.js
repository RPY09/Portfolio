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

typeEffect();

const elements = document.querySelectorAll(".contact1, .contact2");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-visible");
      } else {
        entry.target.classList.remove("scroll-visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

elements.forEach((el) => observer.observe(el));
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  // Store user details in an object
  const userDetails = {
    name: name,
    contactNumber: number,
    email: email,
  };

  // Log the user details (optional: store in localStorage or display on the page)
  console.log(userDetails);

  // Example: Store in localStorage
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  // Example: Display details on the page (optional)
  alert(`Thank you, ${name}! Your details are saved.`);
});
