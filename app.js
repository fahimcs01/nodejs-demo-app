const express = require("express");
const app = express();

// Use the port from Render or fallback to 4000 for local testing
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js task for ci-cd auto deployment!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
