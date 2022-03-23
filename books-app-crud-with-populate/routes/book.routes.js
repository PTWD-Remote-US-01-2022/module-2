const router = require("express").Router();

const Author = require("../models/Author.model");
const Book = require("../models/Book.model");

// get route to enable users to create a new book
router.get("/books/new", (req, res, next) => {

    Author.find()
    .then(authorsFromDB => {
        res.render("book-views/book-new", { authorsFromDB });
    })
    .catch(err => console.log(`Error while getting the authors for creating a new book: ${err}`))
});

// post route to save a new book into the DB
// <form action="/books/create" method="POST">
router.post("/books/create", (req, res, next) => {
    // console.log(req.body);

    const { title, description, author, rating } = req.body;
    Book.create({ title, description, author, rating })
    .then(newBookFromDB => {
        console.log(newBookFromDB)
    })
    .catch(err => console.log(`Error while saving new book: ${err}`))
})


module.exports = router;
