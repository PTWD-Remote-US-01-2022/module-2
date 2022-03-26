const bcryptjs = require('bcryptjs');

const saltRounds = 10;

const userPassword = "12345";

// on top of the user's password, bcryptjs adds salt - 
// a random string that gets scrambled together with a password to create a hashed password

const salt1 = bcryptjs.genSaltSync(saltRounds);

console.log(`SALT 1: ${salt1}`); // SALT 1: $2a$10$v7H/4AP3wSvzMF0n9gOOVe

const hashedPassword = bcryptjs.hashSync(userPassword, salt1);

console.log(`HASHED PASSWORD: ${hashedPassword}`);

// SALT 1:          $2a$10$TN76NDfdQRetzzrGWNmrZO
// HASHED PASSWORD: $2a$10$TN76NDfdQRetzzrGWNmrZOfW8rqRiy.Cn5Uc63K1SkeXGijLCmyxq