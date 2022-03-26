const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const User = require("../models/User.model");

// GET route to display the signup form to a user
router.get("/signup", (req, res, next) => {
  res.render("auth-pages/signup.hbs");
});

// POST route to save a new user in the database
// <form action="/create-account" method="POST">
router.post("/create-account", (req, res, next) => {
    // console.log(req.body);

    const saltRounds = 10;

    const { username, email, password } = req.body;

    bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
        return User.create({ 
            username, 
            email,
            passwordHash: hashedPassword
        })
    })
    .then(userFromDB => {
        // console.log(`New user created: ${userFromDB}`);
        res.redirect("/profile")
    })
    .catch(err => console.log(err))
})

router.get("/profile", (req, res, next) => {
    res.render("user-pages/profile-page")
})


module.exports = router;
