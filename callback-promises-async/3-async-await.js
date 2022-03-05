async function printAllWithAsync() {
    try {
      await printStringWithPromises("A")
      await printStringWithPromises("B")
      await printStringWithPromises("C") 
    } catch (err){
      console.log(err)
    }
  }
  
  printAllWithAsync()
  
  
  async function getName(name) {
    return name;
  }
  
  // getName("sandra"); // prints nothing the console
  
  
  getName("sandra")
  .then( passedName => console.log(passedName))
  .catch(err => console.log(err))