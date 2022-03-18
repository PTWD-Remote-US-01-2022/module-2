const express = require("express");
const app = express();
const hbs = require("hbs");

require("dotenv").config();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// : ===> means this is dynamic and will be different for every user
// : ==> means "params"
// http://localhost:3000/users/sandrabosk
// http://localhost:3000/users/rabiul
app.get("/users/:user", (req, res) => {
    console.log("the URL params: ", req.params);
})

app.get("/store/clothes/:season/:singleClothing", (req, res) => {
    console.log("the URL params for season: ", req.params.season);
    console.log("the URL params for clothing: ", req.params.singleClothing);
})

app.get("/store/search", (req, res) => {
    console.log("This is the inputted info: ", req.query);
    console.log("This is the info about NAME: ", req.query.product_name);
    console.log("This is the info about SIZE: ", req.query.product_size);
    console.log("This is the info about COLOR: ", req.query.product_color);

    res.render("search-result.hbs", req.query)
})

// /products/toys?prodID=123
app.get("/products/:category", (req, res) => {
    console.log("the URL params for category: ", req.params.category);
    console.log("the URL query for prodID: ", req.query.prodID);
})

// 1:
//  http://localhost:3000/albums/123cool4lbum
app.get('/albums/:albumId', (req, res) => {
    console.log(req.params.albumId);
    // expected output: 123cool4lbum
})


// 2:
// http://localhost:3000/students/sandra
app.get('/students/:name', (req, res) => {
    console.log(req.params.name);
    // expected output: sandra
})

// 3: 
// http://localhost:3000/nature/large/1
app.get('/:imageType/:imageSize/:imageID', (req, res) => {
    console.log(req.params.imageType); // nature
    console.log(req.params.imageSize); // large
    console.log(req.params.imageID); // 1
    // expected output: nature large 1
})

// 4:
// http://localhost:3000/stefan?albumId=123abc
// app.get('/:user', (req, res) => {
    
// http://localhost:3000/stefan/123
app.get('/:user/:albumId', (req, res) => {
    console.log(req.params.user); // stefan
    console.log(req.params.albumId); // 123
    // expected output: stefan 123
})


// QUERIES:

// 5:
// URL: http://localhost:3000/products?category=coffee
app.get('/products', (req, res) => {
    console.log('----', req.query.category);
    // expected output: coffee
})

// 6:
// URL: http://localhost:3000/marketplace?category=code-review&type=apps
app.get('/marketplace', (req, res) => {
    console.log(req.query.category); // code-review
    console.log(req.query.type); // apps
    // expected output: code-review apps
})

// 7:
// URL: http://localhost:3000/search?city=barcelona&accommodation=hotel&transport=public
app.get('/search', (req, res) => {
    console.log(req.query.city); // barcelona
    console.log(req.query.accommodation); // hotel
    console.log(req.query.transport); // public
    // expected output: barcelona hotel public
})

app.get("/", (req, res) => res.render("index.hbs"))

app.listen(process.env.PORT, () => console.log(`App is running on ${process.env.PORT}`));