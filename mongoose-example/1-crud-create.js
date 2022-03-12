// import / require model

const Cat = require("./models/Cat.model");
// const Cat = require("./models/Cat.model.js"); // => you don't have to use ".js"

// CONNECT YOU APP WITH THE MONGODB
require("./configs/database.config");

// Create new cat (insert document in the DB (uses insertOne() and insertMany() mongo methods))

// .create() ==> mongoose method that is built on top od insertOne() and insertMany() mongo methods

Cat.create({ 
    name: "Garfield",
    age: 12,
    color: "orange"
})
.then(catDoc => console.log(`New doc successfully created: ${catDoc}`))
.catch(err => `Creating new doc went wrong! Try again 😢 ${err}`)

// const sandrasCat = new cat({ name: "milo", age: 5 });
// sandrasCat
// .save()
// .then(/* success */)
// .catch(/* error */)

Cat.create([
    { 
        name: "Garfield 2",
        age: 2,
        color: "red"
    },
    { 
        name: "Garfield 3",
        age: 1,
        color: "blue"
    },

])
.then(catDoc => console.log(`New doc successfully created: ${catDoc}`))
.catch(err => `Creating new doc went wrong! Try again 😢 ${err}`)