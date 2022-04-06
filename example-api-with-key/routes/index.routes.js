const router = require("express").Router();

const axios = require("axios");
axios.defaults.headers.common['x-api-key'] = process.env.API_KEY; // you won't be able to see the API_KEY when I push the code as it is in .env (which is in .gitignore)

/* GET home page */
router.get("/", (req, res, next) => {

  // in case you want this to be a search option for your users to type any city they wish,
  // then you can pick up whatever they type from req.query.name_of_search_input_in_the_form;

  // axios.get(`https://api.ambeedata.com/latest/by-city?city=${req.query.name_of_search_input_in_the_form}`)

  axios.get("https://api.ambeedata.com/latest/by-city?city=barcelona")
  .then(responseFromAPI => {
    // console.log("what is it: ", responseFromAPI.data.stations[0].aqiInfo);
    
    // const dataToShowToUsers = {
    //   placeName: responseFromAPI.data.stations[0].placeName,
    //   state: responseFromAPI.data.stations[0].state,
    //   concentration: responseFromAPI.data.stations[0].aqiInfo.concentration,
    //   category: responseFromAPI.data.stations[0].aqiInfo.category
    // }

    // we can clean this mess up a bit using object destructuring (shown below):

    const { placeName, state, aqiInfo: {concentration, category} } = responseFromAPI.data.stations[0];

    const dataToShowToUsers = { placeName, state, concentration, category }

    res.render("index", dataToShowToUsers);
  })
  .catch(err => {
    console.log(err);

    next(err);
  });
});

module.exports = router;
