
// Function executes search inputs
const search = () => {
  // Listen to event when search button clicked
  var searchBtn = document.querySelector(".search");
  searchBtn.addEventListener("click", event => {
    event.preventDefault();
    searchInputs = document.querySelector(".search-value").value.trim();
    console.log(`Searched topic: ${searchInputs}`);

    // validate user inpiuts
    validateInputs();

    // Connect to APIs to search to cities/topics
    pixabayAPI();
    unsplashAPI();
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


/***************************EXECUTE APP HERE********************/

// Display images when a user searches a city
search();


