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