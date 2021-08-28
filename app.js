const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(3000, () => {
  console.log("Server started!");
});
