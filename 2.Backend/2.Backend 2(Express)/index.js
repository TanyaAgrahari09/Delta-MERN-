const express = require("express");
// var express is a fn.

const app = express();
// var app is an object and there are a lot of methods of this app object. Exmpl: listen,get,post,use etc.

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
/*
app.listen(port, ...) → This tells Express:
"Hey, please start the server and keep listening for requests on this port."

The second part ()=>{ console.log(...) } is a callback function.
---> It will run once your server successfully starts.
---> It just prints a message on your terminal so you know the server is running.
*/

// Routing:
app.get("/", (req, res) => {
  res.send("Hey! You contacted root path.");
});

app.get("/help", (req, res) => {
  res.send("You contacted help path.");
});

app.get("/products", (req, res) => {
  res.send("You contacted products path.");
});

app.get((req, res) => {
  res.send("This path doesnr exist.");
});

app.post("/", (req, res) => {
  res.send("You sent a post request.");
});

// Path parameters:

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(req.params);
  let code = `<h1>Welcome to the page of @${username}</h1>`
  res.send(code);
});


// Query string: 
app.get("/search",(req,res)=> {
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1> `);
});
/*
app.use((req,res) => {
    console.log("request received.");
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>"
    res.send(code);
    
})
*/
