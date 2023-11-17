const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

//Controller

const categoriesController = require("./categories/categoriesController");
const articlesController = require("./articles/articlesController");
//View Engine
app.set("view engine", "ejs");

//Static
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão bem sucedida");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("The server is online");
});
