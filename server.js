const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "noobgamer",
  database: "mydb"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// Receive data from frontend
app.post("/click", (req, res) => {
  const { name, numb } = req.body;
  const sql = "INSERT INTO users (name, numb) VALUES (?, ?)";
  db.query(sql, [name, numb], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error saving to DB" });
    } else {
      res.send({ message: "User saved!" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});