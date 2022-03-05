// https://www.npmjs.com/package/colors

// 1. we need to install packages that we want to use
    // some packages are pre-built in node, so we can just go ahead and use them
    // without installing them
// 2. we need to require packages we want to use in the file where we want to use them


const myColors = require("colors/safe");

console.log(myColors.yellow('hello')); // outputs green text
console.log(myColors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(myColors.inverse('inverse the color')); // inverses the color
console.log(myColors.rainbow('OMG Rainbows!')); // rainbow
console.log(myColors.trap('Run the trap')); // Drops the bass