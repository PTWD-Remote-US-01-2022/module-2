// import / require model

const Cat = require("./models/Cat.model");
// const Cat = require("./models/Cat.model.js"); // => you don't have to use ".js"

// CONNECT YOU APP WITH THE MONGODB
require("./configs/database.config");

// _id: 622d0fd38351981548fefc61

// findByIdAndDelete() does the same as findByIdAndRemove()

Cat.findByIdAndDelete("622d0fd38351981548fefc61")
.then(deletedDoc => console.log(`Deleted cat with ID: ${deletedDoc._id}`))
.catch(err => console.log(`Error while deleting a doc: ${err}`))

// delete all cats with name Garfield

Cat.deleteMany({ name: "Garfield" })
.then(deletedDocs => console.log("Deleted: ", deletedDocs))
.catch(err => console.log(`Error while deleting docs: ${err}`))

// delete a single cat with age 1
Cat.deleteOne({ age: 1 })
.then(deletedDoc => console.log("Deleted: ", deletedDoc))
.catch(err => console.log(`Error while deleting doc: ${err}`))