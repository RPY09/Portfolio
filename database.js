const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to parse URL-encoded data
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "63379", // Replace with your MySQL password
  database: "contact_form", // Database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});
// API to Save User Details
app.post("/api/saveUser", (req, res) => {
  const { name, contactNumber, email } = req.body;

  // Insert query
  const query =
    "INSERT INTO user_details (name, contact_number, email) VALUES (?, ?, ?)";
  db.query(query, [name, contactNumber, email], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error saving user details.");
      return;
    }
    res.status(200).json({ message: "User details saved successfully!" });
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Server is running on port ${PORT}`);
});
