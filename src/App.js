import React from "react";
import "./App.css";

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  //GETTING DATA FROM AN API
  // 1. GET the data (fetch)
  // 2. Save the data to state

  // below isnt the right way to fetch data, (video called it broken?)

  //this console log below runs over and over infinitly because the fetch is on the top level of our component so whever the component renders, it calls fetch, and it re renders the data over and over. we dont ewant this so we need to dela wiht the "side effects"
  // console.log("Component rendred")

  // fetching data from starwars api

  //fetch("https://swapi.dev/api/people/1")
  // .then resolves a promise, recives a response and res aka response . json turn it into js data we can use for the page
  // .then(res => res.json())
  // below takes the data and tells it what to do, below consoel logs it
  // .then(data => console.log(data))

  // now we take the data and actually add it to the page

  //.then(data => setStarWaData (data))

  // below we are using the the use effect to help us deaal wiht the re rendering of the above api data

  // this is the required first parameter, there is an optional second parameter
  // the required paraameter below is a call back function

  React.useEffect(function () {
    // inside of here, we will insert the side effect code , in this example, its the above api fetch request that was re rendering

    // anything put inside of here is guaranteed to only run after below data is rendered to the DOM
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));

    //?? still re-rendering at this point, we have to add the second parameter to get it to listen to what we waant it to do
  });
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
