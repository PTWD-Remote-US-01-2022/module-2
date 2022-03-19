// destructuring

let person1 = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal',
  };
  
  // es5
  
  const personsName = person1.name;
  const personsAge = person1.age;
  const personsFavoriteMusic = person1.favoriteMusic;
  
  // //es6
  
  // // const name = person.name; // this is what the below line of code does
  const { name, age, favoriteMusic } = person1;
  console.log(name, age, favoriteMusic);
  
  
  const person = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal',
    address: {
      street: 'Super Cool St',
      number: 123,
      city: 'Miami',
    }
  };
  
  console.log(person.address.city); // Miami
  
  const { 
    name, 
    age, 
    favoriteMusic,
    address: {street, number, city}
  } = person;
  
  // console.log(number); // 123
  
  const fruits = ["banana", "orange"];
  const veggies = ["broccoli", "potato"];
  
  const fruitsAndVeggies = [];
  
  fruits.forEach(oneFruit => fruitsAndVeggies.push(oneFruit) );
  veggies.forEach(oneVeggie => fruitsAndVeggies.push(oneVeggie) );
  
  console.log(fruitsAndVeggies);
  
  const superFruitsAndVeggies = [...fruits, ...veggies];
  
  console.log("this is super array: ", superFruitsAndVeggies);
  
  const user = {
    firstName: "anna",
    lastName: "bosk"
  };
  
  // function getFullName(userObj) {
  //   console.log(`The full name is: ${userObj.firstName} ${userObj.lastName}`)
  // }
  
  // getFullName(user)
  
  // function getFullName({ firstName, lastName }) {
  //   console.log(`The full name is: ${firstName} ${lastName}`)
  // }
  
  // getFullName(user)
  
  