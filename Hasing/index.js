const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/user')

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/blogify").then((e) => console.log("MongoDb Connected"));  

app.set("view engine", "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.render("home")
}); 

app.use("/user", userRoute); // use the user route middleware

app.listen(PORT, ()=> console.log(`server started at http://localhost:${PORT}`));