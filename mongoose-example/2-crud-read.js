// import / require model

const Cat = require("./models/Cat.model");
// const Cat = require("./models/Cat.model.js"); // => you don't have to use ".js"

// CONNECT YOU APP WITH THE MONGODB
require("./configs/database.config");

// Reading the cats from DB (use find(), findOne() or findById())

// find() ===> returns an array
// findOne() or findById() ===> always return a single object

Cat.find()
.then(catDocs => console.log("All cats from DB: ", catDocs))
.catch(err => `Getting cat docs went wrong! Try again 😢 ${err}`)


// findById()
// _id: 622d0d8dcc252688a26d896e --> comes from DB

Cat.findById("622d0d8dcc252688a26d896e")
.then(catDocFromDB => console.log("The cat with specific ID is: ", catDocFromDB))
.catch(err => `Getting a specific cat doc went wrong! Try again 😢 ${err}`)


// Bonus: count documents

Cat.countDocuments({ name: "Garfield" })
.then(total => console.log("Total count by set condition is: ", total))
.catch(err => `Counting cat docs went wrong! Try again 😢 ${err}`)


