const express = require("express");
const app = express();
const hbs = require("hbs");

require("dotenv").config();

// thanks to the line below we are able to grab "req.body" to get values of input fields
app.use(express.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// <form action="/fake-login" method="POST">
app.post("/fake-login", (req, res) => {
    // GET: req.params --> always associated with ":" 
    // GET: req.query --> always associated with "?" 

    // POST: req.body --> always associated with FORM with method "POST"

    // user_username and user_password come from the "name" attribute in the input field in the form
    console.log("Username is: ", req.body.user_username);
    console.log("Password is: ", req.body.user_password);

    res.render("index.hbs", req.body)
})

app.get("/", (req, res) => res.render("index.hbs"))

app.listen(process.env.PORT, () => console.log(`App is running on ${process.env.PORT}`));