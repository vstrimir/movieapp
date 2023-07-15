const express = require("express");
const app = express();
const PORT = 3001;
var cors = require("cors");
app.use(cors());
const userRoutes = require("./services/userRoutes");
app.use(express.json());
app.use("/users", userRoutes);
const movies = require("./movies.json");

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/movies", function (req, res) {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
