const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(3000, () => {
  console.log("Server started!");
});
