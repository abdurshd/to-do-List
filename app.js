const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
let items = [];
app.get("/", (req, res)=> {
  let today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString('en-US', options);
  
  res.render('list', {thisDay: day, newAddedItems: items});
});

app.post("/", (req, res)=> {
  item = req.body.addedItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3333, ()=> {
  console.log("Server yugurib yuribdi");
});

