// just by creating a promise, it is in the state of "PENDING"
function printStringWithPromises(str) {
    return new Promise((resolve, reject) => {
      
      if(str) {
        setTimeout(() => {
          console.log(str);  
          resolve(str); // fulfilled state
        }, Math.floor(Math.random() * 100))
      } else {
        const err = new Error("String in never passed in!");
        console.log(err)
        reject(err); // rejected state
      }
      
    })
  }
  
  
  // schooly approach
  // printStringWithPromises("A")
  // .then(val => {
  //   console.log(`Passed: ${val}`);
  //   return printStringWithPromises("B")
  // })
  // .then(val => {
  //   console.log(`Passed: ${val}`);
  //   return printStringWithPromises("C")
  // })
  // .then(val => {
  //   console.log(`Passed: ${val}`);
  // })
  // .catch(err => console.log(`Error has occurred: ${err}`))
  
  
  function printAllWithPromises() {
    printStringWithPromises("A")
    .then(() => printStringWithPromises("B"))
    .then(() => printStringWithPromises("C"))
    .catch(err => console.log(`Error has occurred: ${err}`))
  }
  
  printAllWithPromises()