// control
const express = require("express");
const mongoose = require('mongoose');
const controler = require('./controllers/controller')
const app = express();
const port = 3000;
//###########################

app.use(express.urlencoded({ extended: true }));

//view engine EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
//###################################################

// Connection to Database
mongoose.connect('mongodb+srv://shadi:5748403@cluster0.1lkykav.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("DB conected");
  })
  .catch((err) => {
    console.log(err);
  })
//########################################


//Router 
app.get("/", controler.homePage);
app.get('/about', controler.aboutPage)
//#############################################

// Post message 
app.post('/newPost', controler.new_post)

// Port 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
//#################################################