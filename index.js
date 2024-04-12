const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();

if (process.env.NODE_ENV) {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
