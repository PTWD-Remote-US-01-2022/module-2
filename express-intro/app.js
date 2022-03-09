
// the name you give    the package we installed
//      |                   |
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// here we are creating a server (represents the Express app object)
const app = express();


// connect "public" folder to our express app
// this makes everything inside the public folder accessible for the rest of application
app.use(express.static("public"));


// ROUTES:

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Hello there!!!</h1>
        <p>This is the HTML that I am sending from a route.</p>

        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    `)
})


app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html");
})


app.get("/ironhack", (req, res, next) => {
    res.sendFile(__dirname + "/views/ironhack-home.html");
})

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`))