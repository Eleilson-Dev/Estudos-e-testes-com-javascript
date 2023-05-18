const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const alunos = require("./src/data/alunos.json");
const users = require("./src/data/users.json");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json("index");
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/alunos", (req, res) => {
  return res.json(alunos);
});

app.listen(3001, () => {
  console.log("Express startd at http://localhost:3001");
});
