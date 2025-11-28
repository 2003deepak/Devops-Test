const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World By Aryan!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is by aryan running at http://localhost:${port}`);
});

module.exports = app;
