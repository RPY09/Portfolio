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
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1000);
  }
}

function deleteEffect() {
  const currentText = texts[currentTextIndex];
  Text.innerHTML = currentText.slice(0, charIndex);

  if (charIndex > 0) {
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(typeEffect, 500); // Pause before typing next text
  }
}

typeEffect();
//scrolling effect------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation links
  document.querySelectorAll("header .head a").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (href.startsWith("#")) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          console.error(`Element not found: ${href}`);
        }
      });
    }
  });

  // Handle resume download link
  const resumeLink = document.querySelector("#Resume-header a");
  if (resumeLink) {
    resumeLink.addEventListener("click", function (e) {
      // No need to prevent default behavior for download link
      console.log("Resume download link clicked");
    });
  }
});

//scrolling effect------------------------------------------------------------------------------------------------------------------------------------------------------------
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
  const mainElement = document.querySelector(
    ".main,.ach-container,qul-container"
  );

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

//QR code overlay------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//loading screen------------------------------------------------------------------------------------------------------------------------------------------------------------
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

//scroll to top------------------------------------------------------------------------------------------------------------------------------------------------------------

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".head");

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

//displaying image in modal---------------------------------------------------------------------------------------------------------------------------------------------
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

const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const icon = toggleButton.querySelector("i"); // Target the icon inside the button

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle the "active" class on the button
  toggleButton.classList.toggle("active");

  if (icon.classList.contains("bi-list-nested")) {
    icon.classList.remove("bi-list-nested");
    icon.classList.add("bi-x-lg");
  } else {
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-list-nested"); // Revert to the menu icon
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Details successfully submitted. Thank you, ${name}!`);
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formStatus = document.getElementById("form-status");

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formStatus.innerHTML =
            '<p style="color: green; font-family="Dancing Script">Thank you! Your message has been sent.</p>';
          form.reset();
        } else {
          formStatus.innerHTML =
            '<p style="color: red;">Oops! Something went wrong. Please try again.</p>';
        }
      })
      .catch((error) => {
        formStatus.innerHTML =
          '<p style="color: black;">Oops! Something went wrong. Please try again.</p>';
      });
  });
