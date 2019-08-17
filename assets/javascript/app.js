// Function executes search inputs
const search = () => {
  // empty globars vars
  emptyGlobaVars();

  // Listen to event when search button clicked
  var searchBtn = document.querySelector(".search");
  searchBtn.addEventListener("click", event => {
    event.preventDefault();
    // clear the content
    document.querySelector(".container-content").textContent = "";
    searchInputs = document.querySelector(".search-value").value.trim();
    console.log(`Searched topic: ${searchInputs}`);

    // validate user inputs
    validateInputs();

    // by Default display results 
    // pixabayAPI();
    // unsplashAPI();
    openweatherAPI();
  });
};

// Function validate user inputs
const validateInputs = () => {
  if (searchInputs == "") {
    alert(
      "Oops! User inputs cannot be empty. Click OK to see an example of searched places"
    );
    // by default we want to redirect the user to San Francisco if nothing entered in the search field
    return (searchInputs = document.querySelector(".search-value").value =
      "San Francisco");
  }
};

const imageIconClicked = () => {
  var imgIcon = document.querySelector(".image-icon");
  imgIcon.addEventListener("click", () => {
    // clear the content
    document.querySelector(".container-content").textContent = "";
    // Connect to APIs to search to cities/topics
    pixabayAPI();
    unsplashAPI();
  });
};

const weatherIconClicked = () => {
  var weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.addEventListener("click", () => {
    document.querySelector(".container-content").textContent = "";
    openweatherAPI();
  });
};

/***************************EXECUTE APP HERE********************/

// Display Weather when searched
search();

imageIconClicked();
weatherIconClicked();
