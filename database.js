const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS to allow requests from your local development environment
app.use(
  cors({
    origin: "http://localhost:5500", // Replace with the URL of your local development environment
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

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

  // Validate request data
  if (!name || !contactNumber || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Insert query
  const query =
    "INSERT INTO user_details (name, contact_number, email) VALUES (?, ?, ?)";
  db.query(query, [name, contactNumber, email], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err.message);
      return res.status(500).send("Error saving user details.");
    }
    res.status(200).json({ message: "User details saved successfully!" });
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
