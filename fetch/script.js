// The used API: https://restcountries.com/

fetch("https://restcountries.com/v3.1/all") // <== we hit the endpoint to fetch the data for all the countries
.then(response => response.json())
.then(data => {

  const countryData = document.querySelector("h2");

  data.forEach(singleCountry => {
      countryData.innerText += `
      ${singleCountry.name.official} ${singleCountry.flag}
    `;
  })

  // console.log(data[0]);
})
.catch(err => console.log(err))

