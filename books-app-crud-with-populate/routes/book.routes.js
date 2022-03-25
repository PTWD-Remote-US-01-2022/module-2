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

// post route to delete the document from the DB
// <form action="/books/{{_id}}/delete" method="post">
router.post("/books/:id/delete", (req, res, next) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/books"))
    .catch(err => console.log(`Error while deleting the book from the DB: ${err}`))
})

// get route to display the pre-filled form for users to be able to update the book
router.get("/books/:bookId/edit", (req, res, next) => {
    Book.findById(req.params.bookId)
    .populate("author")
    .then(bookThatWillBeEdited => {
        Author.find()
        .then(allAvailableAuthorsFromDB => {

            // to compare mongoDB IDs we can't use === or == because
            // we are not comparing strings but type of IDs
            // when we compare mongodb IDs we should use ".equals()" method
            const allOtherAuthors = 
                allAvailableAuthorsFromDB.filter(oneAuthor => !oneAuthor._id.equals(bookThatWillBeEdited.author._id))

            // console.log(allOtherAuthors)

            // we need allOtherAuthors to enable users to choose from a 
            // list of all authors except the one that is saved in this book
            res.render("book-views/book-edit", { bookThatWillBeEdited, allOtherAuthors })
        })
        .catch(err => console.log(`Error while getting all the authors from DB: ${err}`))
    })
    .catch(err => console.log(`Error while getting the book that will be edited: ${err}`))
})

// post route to save the updates user made in a specific book to the DB
// <form action="/books/{{bookThatWillBeEdited._id}}/update" method="POST">
router.post("/books/:idOfTheEditedBook/update", (req, res, next) => {

    const { title, description, author, rating } = req.body;
    Book.findByIdAndUpdate(req.params.idOfTheEditedBook, { title, description, author, rating }, {new: true})
    .then(updatedBook => res.redirect(`/books/${updatedBook._id}`))
    .catch(err => console.log(`Error while saving updates of a book in the DB: ${err}`))
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
