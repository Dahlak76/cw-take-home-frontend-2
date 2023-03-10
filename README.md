# cw-take-home-2  

Question 2 -  
Create a frontend using React with redux-toolkit that displays some kind of input form, which then passes the payload to a redux slice that interfaces with the api from the previous exercise. The page should display the response from the redux state. Upload this to a publicly-accessible git repository as well. 

This repository works with the https://github.com/Dahlak76/cw-take-home-1 repository. Both were created with Javascript.  
- used   
"npx create-react-app my-app"  
"npm install redux react-redux @reduxjs/toolkit"  

*store.js  

import the configureStore and createSlice functions from the '@reduxjs/toolkit' library
import the 'axios' library for making API calls.
Create a Redux slice with the following properties:

a name of "api"
initial state with the following properties:
response with an empty string value
loading with a false boolean value
error with a null value
three reducers:
setResponse: sets the response property in the state to the payload and sets loading to false.
setLoading: sets loading to true.
setError: sets the error property in the state to the payload and sets loading to false.
Export the actions generated by the slice:

setResponse, setLoading, setError.
Define a fetchData function that dispatches the loading and response/error actions:

This function accepts a payload argument and returns an async function that dispatches actions.
Inside the function, dispatch the setLoading action.
Make a POST request to the endpoint 'http://localhost:3006/transform' with the payload using axios.
If the request is successful, dispatch the setResponse action with the response data as the payload.
If the request is not successful, dispatch the setError action with the error message as the payload.
Create a store using the configureStore function and pass in the reducer from the slice.

Export the store.  

* Form.js  
- Create a functional component 'Form'
- In the component, use useDispatch hook to get dispatch function from the React-Redux context
- Create a state variable 'input' and its setter function 'setInput' using useState hook with initial value ''
- Create a function 'handleSubmit' that takes an event as an argument and will be executed on form submit
  - Prevent default form behavior with `e.preventDefault()`
  - Dispatch the 'fetchData' action with the payload being the value of the 'input' state
- Return a form with an input field that updates the 'input' state on change, and a submit button that triggers the 'handleSubmit' function when clicked.

- Export the Form component as default export.  
  
* index.js  
- import Form from Form.js and pass in the component inside the Provider  