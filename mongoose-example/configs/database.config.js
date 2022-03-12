const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-example-cat')
.then(x => { // if all is successful
    console.log(`Connected with MongodDB! Database name is: ${x.connections[0].name}`)
}) 
.catch(err => console.log("Error while connecting to the MongoDB: ", err)) // if there is an error or something isn't working as we expected
