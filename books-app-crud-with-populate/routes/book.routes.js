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
        // console.log(newBookFromDB);
        res.redirect("/books");
    })
    .catch(err => console.log(`Error while saving new book: ${err}`))
})


// get route to display all the books from the DB
router.get("/books", (req, res, next) => {
    Book.find()
    .then(booksFromDB => {
        res.render("book-views/book-list", { booksFromDB })
    })
    .catch(err => console.log(`Error while getting the books from the DB: ${err}`))
})

// get route to show a specific book details

router.get("/books/:bookID", (req, res, next) => {
    Book.findById(req.params.bookID)
    .populate("author")
    .then(bookFromDB => {
        // console.log(bookFromDB);

        res.render("book-views/book-details", bookFromDB)
    })
    .catch(err => console.log(`Error while getting a details of specific book: ${err}`))
})


module.exports = router;
