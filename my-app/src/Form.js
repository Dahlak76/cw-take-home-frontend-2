import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './app/store'

//create a form component that dispatches the fetchData function
const Form = () => {
  //use the useDispatch hook to dispatch the fetchData function
  //create a state variable for the input value
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  //create a function that handles the form submit event 
  //and dispatches the fetchData function with the input value as the payload
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchData({ payload: input }))
  }
  //return a form with an input and submit button 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
