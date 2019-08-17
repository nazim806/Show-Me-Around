// global variable for inputs values
var countryCode = "US";
var searchInputs = "";
var searchedTopic = [];

// global variables to store object reponses from Open Weather Map, Pixbay, Unplash
var openweatherData = [];
var pixabayData = [];
var unsplashData = [];

// global variables to store data we want to dispaly from three API calls
var openweatherTemp;
var pixaImgs;
var unsplashImgs;

// Function connects to Open Weather Map API https://openweathermap.org
const openweatherAPI = () => {
  let apiKey = "01226f2a98453b7fa24ffbcbaccef8ec";
  // let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputs}&units=imperial&appid=${apiKey}`;
  // to get more accurate weather information, we need to use city name(earchInputs) and country code
  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputs},${countryCode}&units=imperial&appid=${apiKey}`;

  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      // Inspect object reponse from open weather map
      console.log("Open weather map API reponse:");
      console.log(res);
      // store object
      console.log("Open weather object name: only one array");
      openweatherData = res; // one array response, so display the original reponse as an object
      // console.log(openweatherData.main.pressure);

      var temp = openweatherData.main.temp; // F
      var tempMax = openweatherData.main.temp_max;
      var tempMin = openweatherData.main.temp_min;
      var humidity = openweatherData.main.humidity; //%
      var pressure = openweatherData.main.pressure;
      var wind = openweatherData.wind.speed; // mph 

      let imgIcon = document.querySelector('.weather-icon');
      imgIcon.addEventListener('click', () =>{
        document.querySelector('.weather-title').textContent = `Weather report in ${searchInputs}`;
        document.querySelector('.temp').textContent = `Today's temperate in ${searchInputs} is: ${temp} F`;
        document.querySelector('.temp-max').textContent = `The maximum temperature is ${tempMax} F`;
        document.querySelector('.temp-min').textContent = `The miniumum temperature is ${tempMin} F`;
        document.querySelector('.humidity').textContent = `The humidity is ${humidity} %`;
        document.querySelector('.humidity').textContent = `The wind speed is ${wind} mph`;
      });

    });
};

// Function connects to Pixbay API https://pixabay.com
const pixabayAPI = () => {
  let apiKey = "13279692-a4d822f15bce0800d09e81f6b";
  let queryURL = `https://pixabay.com/api/?key=${apiKey}&q=${searchInputs}`;
  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      // Inspect object reponse from pixabay
      // console.log("Pixabay API reponse:");
      // console.log(res);

      // store object
      // console.log("Pixabay object: hits");
      pixabayData = res.hits;
      // console.log(pixabayData.length);

      // Clear container-content after each search
      var containerContent = document.querySelector(".container-content");
      containerContent.textContent = "";

      // Welcome Message
      containerContent = document.querySelector(".container-content");
      var h3 = document.createElement("h3");
      h3.setAttribute("class", "welcome-message");
      h3.textContent = `Welcome to ${searchInputs}`;
      containerContent.append(h3);

      // Powered by PixaBay Message
      var p = document.createElement("p");
      p.setAttribute("class", "poweredby");
      p.textContent = "Powered By Pixabay.com";
      containerContent.append(p);

      // Loops through Pixabay objects
      for (let i = 0; i < pixabayData.length; i++) {
        // console.log(pixabayData[i].largeImageURL);
        pixaImgs = pixabayData[i].largeImageURL;
        console.log(pixaImgs);

        //render pixabay pictures
        var containerContent = document.querySelector(".container-content");
        var img = document.createElement("img");
        img.setAttribute("class", "pixabay-img");
        img.setAttribute("src", `${pixaImgs}`);
        containerContent.append(img);
      }
      // Clear search value input after rendering
      // document.querySelector(".search-value").value = "";
    });
};

// Function connects to Unsplash API https://unsplash.com
const unsplashAPI = () => {
  let apiKey =
    "6cf717349a1ccca4fe41b91342aebacdbf151277599bf1dddfac7bd37671d803";
  let queryURL = `https://api.unsplash.com/search/photos?query=${searchInputs}&client_id=${apiKey}`;
  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      // Inspect object reponse from pixbay
      // console.log("Unsplash API reponse:");
      // console.log(res);
      //store objects
      // console.log("Unsplash object: results");
      unsplashData = res.results;
      console.log(unsplashData);

      // Welcome Message
      containerContent = document.querySelector(".container-content");
      // var h3 = document.createElement("h3");
      // h3.setAttribute("class", "welcome-message");
      // h3.textContent = `Welcome to ${searchInputs}`;
      // containerContent.append(h3);

      // Powered by Unsplash Message
      var p = document.createElement("p");
      p.setAttribute("class", "poweredby");
      p.textContent = "Powered By Unsplash.com";
      containerContent.append(p);

      // Loop through Unsplash objects
      for (let i = 0; i < unsplashData.length; i++) {
        // console.log(unsplashData[i].urls.raw);

        unsplashImgs = unsplashData[i].urls.raw;
        console.log(unsplashImgs);

        //render pixabay pictures
        var containerContent = document.querySelector(".container-content");
        var img = document.createElement("img");
        img.setAttribute("class", "unsplash-img");
        img.setAttribute("src", `${unsplashImgs}`);
        containerContent.append(img);
      }
    });
};
