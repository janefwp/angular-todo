var express = require("express");

var app = express();

app.use(express.static("./dist/angular-todo"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/angular-todo" });
});

app.listen(process.env.PORT || 8080);

// console.log(`Running on port ${process.env.PORT || 8080}`);