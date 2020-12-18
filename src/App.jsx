import React from 'react'
import { useSelector } from "react-redux";

const App = () => {
  // const [message, setMessage] = useState({ greeting: 'Hello world from hooked state using an object' })
  // let message = 'Hello World from variable'
  const greeting = useSelector(state => state.greeting)
  return (
    <>
      <h1>{greeting}</h1>
    </>
  )
}

export default App