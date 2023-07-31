const serverless = require('serverless-http');
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
let items = [];
let universityItems = [];
app.get("/", (req, res)=> {
  let today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  var day = today.toLocaleDateString('en-US', options);
  
  res.render('list', {listTitle: day, newAddedItems: items, css: "css/styles.css"});
});

app.post("/", (req, res)=> {
  
  let item = req.body.addedItem;
  if (req.body.list === "University list") {
    universityItems.push(item);
    res.redirect('/university');
  } else {
  items.push(item);
  res.redirect('/');
  };
  
});

app.get("/university", (req, res)=> {
  res.render('list', {listTitle: "University list", newAddedItems: universityItems, css: "css/styles-uni.css"})
});

app.get("/about", (req, res)=> {
  res.render("about", {css: "css/styles-about.css"});
}); 

app.listen(3333, ()=> {
  console.log("Server is running on port 3333");
});

module.exports.handler = serverless(app);

