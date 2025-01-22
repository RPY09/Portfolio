document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  // Create the data object
  const userDetails = {
    name: name,
    contactNumber: number,
    email: email,
  };

  // Send data to the server
  fetch("http://localhost:3000/api/saveUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Your details have been saved!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    });
});
