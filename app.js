const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

/*
Using static files
There we have three public folders to use: 
 - assets 
 - CSS
 - js
 */
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/assets", express.static(__dirname + "public/assets"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("reg");
});

app.get("/memory-game", (req, res) => {
  res.render("partials/memory-game");
});

app.use(expressLayouts);
app.get("/main", (req, res) => {
  res.render("partials/empty");
});

app.get("/flashcards", (req, res) => {
  res.render("partials/flashcards");
});

app.get("/account", (req, res) => {
  res.render("partials/account");
});

module.exports = app;
