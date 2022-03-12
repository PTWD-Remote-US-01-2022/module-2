// import / require model

const Cat = require("./models/Cat.model");
// const Cat = require("./models/Cat.model.js"); // => you don't have to use ".js"

// CONNECT YOU APP WITH THE MONGODB
require("./configs/database.config");

// findByIdAndUpdate()
// _id: 622d0fd38351981548fefc5f

Cat.findByIdAndUpdate(
    "622d0fd38351981548fefc5f", 
    {
        $set: { name: "Sandra", age: 4 }
    },
    { new: true }
)
.then(updatedDoc => console.log("Updated cat is: ", updatedDoc))
.catch(err => `Updating cat doc went wrong! Try again 😢 ${err}`)

// update all cats with name Garfield
Cat.updateMany(
    { name: "Garfield" }, 
    { $inc: { age: 1 } } // age = age + 1
)
.then(updatedDocs => console.log("Updated cats are: ", updatedDocs))
.catch(err => `Updating cat docs went wrong! Try again 😢 ${err}`)


// since we have multiple cats named Garfield, it would just update the first one using updateOne()
Cat.updateOne(
    { name: "Garfield" }, 
    { $inc: { age: 1 } } // age = age + 1
)
.then(updatedDoc => console.log("Updated cat are: ", updatedDoc))
.catch(err => `Updating cat doc went wrong! Try again 😢 ${err}`)

