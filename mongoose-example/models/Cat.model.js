const mongoose = require('mongoose');

// here we are getting the access to Schema class from mongoose

const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all documents in this collection


const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    photoUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
    },
    hasLongHair: {
        type: Boolean,
        default: false
    },
    toys: [{
        type: String
    }]
})


// Cat is our model
// all instances of this collection will have these properties
// mongoose turns model name into collection name

// model: Cat ===> collection: cats
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;