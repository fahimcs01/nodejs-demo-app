const express = require("express");
const app = express();
const PORT = 4000; // or 4000 if 3000 is used

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
