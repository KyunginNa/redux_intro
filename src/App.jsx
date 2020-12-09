import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  // const [message, setMessage] = useState({ greeting: 'Hello world from hooked state using an object' })
  const message = useSelector(state => state.message)
  return (
    <>
      <h1>{message.greeting}</h1>
    </>
  )
}

export default App