const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const PORT = process.env.PORT | 5000;

const app = express();

if (process.env.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
