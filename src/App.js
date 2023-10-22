import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0)
    
React.useEffect(() =>{

  //'/// console.log("effect function ran")
    //GETTING DATA FROM AN API
  // 1. GET the data (fetch)
  // 2. Save the data to state

  // below isnt the right way to fetch data, (video called it broken?)

  //this console log below runs over and over infinitly because the fetch is on the top level of our component so whever the component renders, it calls fetch, and it re renders the data over and over. we dont ewant this so we need to dela wiht the "side effects"
  //console.log("Component rendred")

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



  // at first we used the wod function in the parantheses to show its a function now we will use arrow function
  // React.useEffect(function () {
  

/**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
// challenge for use effects dependencies second parameter 






    // inside of here, we will insert the side effect code , in this example, its the above api fetch request that was re rendering

    // anything put inside of here is guaranteed to only run after below data is rendered to the DOM
    
    // for the second parameter pracrice, commented out below lines and added a console log statement 
    //console.log("Effect Ran")
    // fetch("https://swapi.dev/api/people/1")
    //   .then((res) => res.json())
    //   .then((data) => setStarWarsData(data));

    //?? still re-rendering at this point, we have to add the second parameter to get it to listen to what we waant it to do


    // even though the second parameter is called optional, we will almost always us it- called dependtices array// dertimes when arrya will run and how many times- will stop the re redner 


// if we leave below array empty, what we render will only run one time 


 
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     */

    // next quiz
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!// reight now we are only getting the first set of data which is luke sky walker, thats et with the number obe in our fetch statement --fetch("https://swapi.dev/api/people/1")<<<<<<<<< 
     * we do this by removign the 1 and adding + count at the end of the link, we also add count back to our dependices array below so it runs more than just one time, with one array  
     */

fetch("https://swapi.dev/api/people/" + count)




// The .then(res => res.json()) is a part of a Promise chain in JavaScript, specifically used with the fetch API for making HTTP requests. Here's what it means step by step:

// fetch returns a Promise: When you make an HTTP request using fetch, it returns a Promise that resolves to the response to that request.

// .then(): This is a method that you can chain onto the Promise returned by fetch. It's used for handling the response when the Promise is resolved.

// res => res.json(): This is an arrow function that's used as a callback for the .then() method. It takes the response object (res) as an argument and calls the .json() method on it.

// res: The response object represents the response from the HTTP request, which includes the response headers and body.

// res.json(): The .json() method is used to parse the response body as JSON. It reads the response body stream and returns a Promise that resolves to the JavaScript object parsed from the JSON data.

// So, .then(res => res.json()) is saying that when the Promise returned by fetch is resolved, it should take the response (res) and parse it as JSON. This is commonly used when you expect the response from the server to be in JSON format, and you want to work with the data as a JavaScript object.
            .then(res => res.json())

            // changed below console log statement to setstars wars data to pin it to the DOm 
            // .then(data => console.log(data))

            //now this will updates state when we get data back , and trigger a rerender of the component but does not change count value, so will not chnage the  array from one render to the next, bassically keeps the same array the same becasue we have the dependiceies array with the value of count below stopping the side effect  
.then(data => setStarWarsData(data))
  // }, [count]);
  // }
  // if we add count inside the brackets, itn sees it as a depnendicy and it will run effect every time count changes 


  //* 3. What SHOULD be in our dependencies array in this case?
  //*/
// IF WE TAKE OUT COUNT, IT WILL RUN THE EFFECT ONE TIME AND STOP,
  
/// LIKE THIS 
 
// CHCK IT WITH LOG STATEMENT 
console.log("effect ran")
// }, [count])



}, [count])

// CHCK IT WITH LOG STATEMENT

// }, [count])
  
  return (
    <div>


{/* The <pre> element is not an abbreviation for "pre." It's an HTML element, specifically the "preformatted text" element. The <pre> element is used to display text in a fixed-width (monospace) font, and it preserves both spaces and line breaks. It's often used for displaying code snippets, preformatted text, or any text where whitespace and formatting are significant.

The JSON.stringify() function is used to convert a JavaScript object (in this case, starWarsData) into a JSON-formatted string. The second argument (null) and the third argument (2) are optional and used for formatting the JSON string. The 2 indicates that you want to use 2 spaces for indentation in the JSON string, making it more human-readable.

So, in your code, the starWarsData is being stringified to JSON, and the result is placed within a <pre> element, ensuring that the formatting and whitespace are preserved when it's displayed on a web page. */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>

      {/* single add button and something that displays the current count, did this so we had a way to trigger re renders and state changes on our app  */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character </button>
    </div>
  );
}

export default App;


// 1. What is a "side effect" in React? What are some examples?

//anwser// -- 
///// anything react is not in charge of 
//- Any code that affects an outside system.
////- local storage, API, websockets, two states to keep in sync

// 2. What is NOT a "side effect" in React? Examples?


//answser-- - Anything that React is in charge of.
///  - Maintaining state, keeping the UI in sync with the data, render DOM elements


// 3. When does React run your useEffect function? 
//-- - As soon as the component loads (first render)
//- On every re-render of the component(assuming no dependencies array)


//When does it NOT run
//    the effect function?
   
//answser////-- -  Will NOT run the effect when the values of the dependencies in the
 //array stay the same  between renders 

// 4. How would you explain what the "dependecies array" is?

//answser--- - Second paramter to the useEffect function
// - A way for React to know whether it should re-run the effect function