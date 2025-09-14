const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Tanya Agrahari",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti tenetur accusantium eligendi dicta repellendus ad beatae sunt, nesciunt, nobis distinctio molestias temporibus porro animi, dolorum qui quae. Dignissimos, facilis?",
    id: uuidv4(),
  },
  {
    username: "Adam Seden",
    content:
      "yes! but thats incomplete.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti tenetur accusantium eligendi dicta repellendus ad beatae sunt, nesciunt, nobis distinctio molestias temporibus porro animi, dolorum qui quae. Dignissimos, facilis?",
    id: uuidv4(),
  },
  {
    username: "Tony Stark",
    content:
      "Adam is right!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti tenetur accusantium eligendi dicta repellendus ad beatae sunt, nesciunt, nobis distinctio molestias temporibus porro animi, dolorum qui quae. Dignissimos, facilis?",
    id: uuidv4(),
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/id",(req,res) => {
  let {id} = req.params;
  console.log(id);
  res.send("patch request working");
});

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
