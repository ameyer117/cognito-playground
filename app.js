const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started!");
});
