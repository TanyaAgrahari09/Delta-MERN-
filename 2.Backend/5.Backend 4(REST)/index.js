const express= require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
  res.send("Hey! I am learning RESTful APIs in backend!");
});

app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
});

