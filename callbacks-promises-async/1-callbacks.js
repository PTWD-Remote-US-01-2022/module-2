function printString(str) {
  setTimeout(() => {
    console.log(str);
    
    console.log(`It took ${Math.floor(Math.random() * 100)}ms for this function to execute`);
    
  }, Math.floor(Math.random() * 100))
}

printString("A");
printString("B");
printString("C");


//  example with callbacks

function printStringWithCallback(str, callback) {
  setTimeout(() => {
    console.log(str);
    callback();   
  }, Math.floor(Math.random() * 100))
}

function printAllWithCallbacks() {
  printStringWithCallback("A", () => {
    printStringWithCallback("B", () => {
      printStringWithCallback("C", () => {
        console.log("DONE!");
      })
    })
  })
}

printAllWithCallbacks()