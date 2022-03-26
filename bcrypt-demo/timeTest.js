
 const bcryptjs = require("bcryptjs");
const plainPassword = "HelloWorld";
 
for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
  console.time(`bcryptjs | cost: ${saltRounds}, time to hash`);
  bcryptjs.hashSync(plainPassword, saltRounds);
  console.timeEnd(`bcryptjs | cost: ${saltRounds}, time to hash`);
}