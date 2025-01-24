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

document.querySelectorAll("header .head a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const elements = document.querySelectorAll(
  ".contact1, .contact2, .main, .procontainer,.container,.qual-container,.ach-container"
);

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

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector(".main");

  const mainObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  mainObserver.observe(mainElement);
});
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (!sessionStorage.getItem("loadingScreenShown")) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      sessionStorage.setItem("loadingScreenShown", "true");
    }, 2000);
  } else {
    loadingScreen.style.display = "none";
  }
});

document.getElementById("qr-code-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const overlay = document.getElementById("qr-code-overlay");
  overlay.classList.remove("hidden");
  document.body.style.pointerEvents = "none";
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.style.pointerEvents = "auto";
  }, 5000);
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (!sessionStorage.getItem("loadingScreenShown")) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      sessionStorage.setItem("loadingScreenShown", "true");
    }, 2000); // Adjust the timeout duration as needed
  } else {
    loadingScreen.style.display = "none";
  }
});

document.getElementById("qr-code-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const overlay = document.getElementById("qr-code-overlay");
  overlay.classList.remove("hidden");
  document.body.style.pointerEvents = "none"; // Disable interactions
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.style.pointerEvents = "auto"; // Re-enable interactions
  }, 5000); // 5 seconds
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".head");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.querySelector("a").getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
document.querySelectorAll(".skills").forEach((skill) => {
  skill.addEventListener("click", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const backgroundImage = getComputedStyle(skill).backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // Extract URL from background-image

    modalImage.src = imageUrl;
    modal.style.display = "flex";

    setTimeout(() => {
      modal.style.display = "none";
    }, 4000); // 5 seconds
  });
});
document.querySelectorAll(".certi").forEach((certi) => {
  certi.addEventListener("click", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const backgroundImage = getComputedStyle(certi).backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // Extract URL from background-image

    modalImage.src = imageUrl;
    modal.style.display = "flex";

    setTimeout(() => {
      modal.style.display = "none";
    }, 5000); // 5 seconds
  });
});
