


// console.log("This is my first Node project ✅");

require('dotenv').config()
const myHttp = require("http");

const myServer = myHttp.createServer((request, response) => {
    // console.log(`Requested URL is: ${request.url}`);

    // console.log(process.env.GOOGLE_API_CODE)

    if(request.url === "/"){
        response.write("You requested localhost:3000!");
        response.end();
    } else if(request.url === "/ptwd012022"){
        response.write(`
            Gian Carlo
            Emmanuel
            Joey
            Kamila
            Francisco
            Jimmy
        `);
        response.end();
    } else {
        response.write("You are trying to access the page that doesn't exist. Error: 404!")
        response.end();
    }
})





// last line of the code:

myServer.listen(process.env.PORT, () => console.log(`I am on port: ${process.env.PORT} 🏃‍♀️`));