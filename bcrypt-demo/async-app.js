const bcryptjs = require('bcryptjs');

const saltRounds = 10;

const userPassword = "12345";

bcryptjs
.genSalt(saltRounds)
.then(salt => {
    console.log(`SALT: ${salt}`);
    // SALT: $2a$10$5goTGr.BcYacj9am52.GRu
    return bcryptjs.hash(userPassword, salt)
})
.then(hashedPassword => {
    console.log(`HASHED PASSWORD: ${hashedPassword}`);
    // HASHED PASSWORD: $2a$10$5goTGr.BcYacj9am52.GRugONRa8YTWbB8fU7x8etLTDfa1mA/4Na
})
.catch(err => console.log(err))