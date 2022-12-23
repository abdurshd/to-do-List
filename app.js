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
  
  res.render('list', {thisDay: day, newAddedItems: items});
});

app.post("/", (req, res)=> {
  let item = req.body.addedItem;
  items.push(item);
  res.redirect('/');
});

app.get("/university", (req, res)=> {
  res.render('list', {uniDay: day, uniItems: universityItems})
});

app.post('/university', (req, res)=> {
let uniItem = req.body.addedUniItem;
universityItems.push(uniItem);
res.redirect('/university');
})

app.listen(3333, ()=> {
  console.log("Server yugurib yuribdi");
});

