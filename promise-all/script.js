function getCountryDetails(name){
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
  }
  
  
  Promise.all([
    getCountryDetails('serbia'),
    getCountryDetails('spain'),
    getCountryDetails('france')
  ])
  .then(data => {
    console.log("Here is the country data: ", data[0][0].name);

    // this is added outside of the class so you have it as a reference
    // this is great example of messed up data - basically the return value is an array of arrays, not as we would expect an array of objests
    // this means we have to loop through first and then through the second array
    const countryData = document.querySelector("h2");

    data.forEach(singleCountryAsArray => {
      singleCountryAsArray.forEach(singleCountryDetails => {
        countryData.innerText += `
        ${singleCountryDetails.name.common} ${singleCountryDetails.flag}
      `;
      })
    })

  })
  .catch(err => console.log(err))