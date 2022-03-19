const router = require("express").Router();

const Book = require("../models/Book.model");

// ************************************************
// GET ALL BOOKS ROUTE
// ************************************************

// localhost:3000/books
router.get("/books", (req, res, next) => {

    // .find() --> always returns an array
    Book.find()
    .then(allBooksFromDB => {
        // allBooksFromDB is just a placeholder, you can name it however
        res.render("books-pages/books-list.hbs", {
            // allBooksFromDB: allBooksFromDB, 
            allBooksFromDB,
            numberOfBooks: allBooksFromDB.length
        });
    })
    .catch(err => console.log("An error occurred while getting all othe books from DB: ", err));
});


// ************************************************
// CREATE A NEW BOOK ROUTE
// ************************************************
// 1. display the form to a user so they can input title, description, author and rating

router.get("/books/create", (req, res) => {
    res.render("books-pages/books-new.hbs")
})

// 2. create a route to pick up what user inputted in these fields and save it to the database

{/* <form action="/books/new" method="POST"> */}

router.post("/books/new", (req, res) => {
    // console.log("this is what user added in the form: ", req.body);

    const { title, description, author, rating } = req.body;

    Book.create({ title, description, author, rating })
    .then(newSavedBookFromDB => {
        // console.log("this is new book: ", newSavedBookFromDB);

        res.redirect("/books");
    })
    .catch(err => console.log("Error while saving a new book in the DB: ", err))
})

// ************************************************
// GET Route: PREFILL A BOOK DETAILS TO ENABLE EDITING ROUTE
// ************************************************

router.get("/books/:bookId/edit", (req, res) => {
    Book.findById(req.params.bookId)
    .then(bookToUpdate => {
        console.log("here")
        res.render("books-pages/books-edit.hbs", bookToUpdate)
    })
    .catch(err => console.log("Error while getting a book to be edited from the DB: ", err))
})

// ************************************************
// POST Route: SAVE THE CHANGES AFTER EDITING THE BOOK ROUTE
// ************************************************

// <form action="/books/{{_id}}/edit" method="POST">
router.post("/books/:bookID/edit", (req, res) => {
    // console.log("updated book: ", req.body);

    const { title, description, author, rating } = req.body;

    // Book.findByIdAndUpdate(req.params.bookID, req.body)
    Book.findByIdAndUpdate(req.params.bookID, { title, description, author, rating }, { new: true })
    .then(updatedBookFromDB => {
        // console.log(updatedBookFromDB);

        res.redirect(`/books/${updatedBookFromDB._id}`)
    })
    .catch(err => console.log("Error while saving the updates in the book to the DB: ", err))
})

// ************************************************
// POST Route: DELETE THE BOOK ROUTE
// ************************************************
{/* <form action="/books/{{_id}}/delete" method="POST">  */}

router.post("/books/:bookID/delete", (req, res) => {
    Book.findByIdAndDelete(req.params.bookID)
    .then(() => res.redirect("/books"))
    .catch(err => console.log("Error while deleting a book from the DB: ", err))
})


// ✅✅✅ Book Details route will always come last in the routes file ✅✅✅

// ************************************************
// GET A BOOK DETAILS ROUTE
// ************************************************
router.get("/books/:bookId", (req, res) => {
    // console.log("The ID is: ", req.params.bookId);

    Book.findById(req.params.bookId)
    .then(bookFromDB => {
        // console.log("Book title: ", bookFromDB.title)
        res.render("books-pages/books-details.hbs", bookFromDB)
    })
    .catch(err => console.log("Error while getting a book details from the DB: ", err))
})



// any new routes file you create you have to EXPORT and you have to link to 
// app.js (after: "// 👇 Start handling routes here") so the application knows that new file
// is created and some routes will be there too
module.exports = router;

// if you forget to link to app.js, you will get 4️⃣0️⃣4️⃣ error (the page doesn't exist)
