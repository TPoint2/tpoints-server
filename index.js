const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TPoints Server läuft!");
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
