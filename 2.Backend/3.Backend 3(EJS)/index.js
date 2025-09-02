const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res) =>{
    res.render("home.ejs")
});

app.get("/hello", (req, res) => {
  res.send("hello");
});