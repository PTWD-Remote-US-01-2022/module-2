const router = require("express").Router();

const Author = require("../models/Author.model");

// GET route to display the form and enable users to input some author information
router.get("/authors/new", (req, res, next) => res.render("author-views/author-new.hbs"));

// POST route to save a new author in the DB

// <form action="/authors/create" method="POST">
router.post("/authors/create", (req, res, next) => {
    const { firstName, lastName, nationality, birthday, pictureUrl } = req.body;

    Author.create({ firstName, lastName, nationality, birthday, pictureUrl })
    .then(authorFromDB => {
        console.log("new author created: ", authorFromDB);
    }) 
    .catch(err => console.log(`Error while creating a new author: ${err}`))
})

router.get("/authors", (req, res, next) => {
    Author.find()
    .then(allAuthorsFromDB => {
        // console.log("all authors: ", allAuthorsFromDB);
        res.render("author-views/author-list.hbs", { allAuthorsFromDB })
    })
    .catch(err => console.log(`Error while getting all authors: ${err}`))
})


module.exports = router;