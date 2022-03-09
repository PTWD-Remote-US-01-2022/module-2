
// the name you give    the package we installed
//      |                   |
const express = require("express");
require("dotenv").config();

// this package allows templating and dynamic views
const hbs = require("hbs");

const PORT = process.env.PORT || 3000;

// here we are creating a server (represents the Express app object)
const app = express();


// connect "public" folder to our express app
// this makes everything inside the public folder accessible for the rest of application
app.use(express.static("public"));

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// ADD THIS for PARTIALS:
hbs.registerPartials(__dirname + "/views/hbs-files/partials");


// IMPORT FAKE DATA

const studentsList = require("./students-data.js"); // you don't have to add .js in the end

// HTML - ROUTES:

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
    res.sendFile(__dirname + "/views/html-files/home.html");
})


app.get("/ironhack", (req, res, next) => {
    res.sendFile(__dirname + "/views/html-files/ironhack-home.html");
    
})

// HBS - ROUTES:

app.get("/students", (req, res, next) => {
    const justStudentsNames = studentsList.map(student => student.firstName);

    // console.log(justStudentsNames);

    // it is already pre-fixed with "views" so we don't have to put the full path
    // meaning it is wrong ❌ views/hbs-files/students.hbs ❌

    res.render("hbs-files/students.hbs", { justStudentsNames })

})

app.get("/students-miami", (req, res, next) => {
    const justStudentsNames = studentsList.map(student => student.firstName);

    // it is already pre-fixed with "views" so we don't have to put the full path
    // meaning it is wrong ❌ views/hbs-files/students-details.hbs ❌

    const data = {
        cohort: "PTWD 01/2022",
        city: "Miami",
        justStudentsNames
    }

    // res.render("hbs-files/students.hbs", { justStudentsNames })

    res.render("hbs-files/students-details.hbs", data)
})

app.get("/students-berlin", (req, res, next) => {
    const justStudentsNames = ['ilda', 'emma', 'marc', 'ivan'];

    // console.log(justStudentsNames);

    // it is already pre-fixed with "views" so we don't have to put the full path
    // meaning it is wrong ❌ views/hbs-files/students-details.hbs ❌

    const data = {
        cohort: "UXUI PT 02/2021",
        city: "Berlin",
        justStudentsNames
    }

    res.render("hbs-files/students-details.hbs", data)
})


app.get("/random-student", (req, res, next) => {
    const randomIndex = Math.floor(Math.random() * studentsList.length);

    const dataToBeSentToHBS = {
        randomStudent: studentsList[randomIndex]
    }

    res.render("hbs-files/random-student.hbs", dataToBeSentToHBS)
})





app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`))