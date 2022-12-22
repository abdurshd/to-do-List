const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
  let today = new Date();
  let bugun = today.getDay();
  let day = "";
  hafta = ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'];

  for (i=0;i<bugun;i++) {
    day = hafta[i+1]
    }
    res.render('list', {bugun: day});
});

app.listen(3333, ()=> {
  console.log("Server yugurib yuribdi");
});

