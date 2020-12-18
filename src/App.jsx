import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState({ greeting: 'Hello world from hooked state using an object' })
  // let message = 'Hello World from variable'
  return (
    <>
      <h1>{message.greeting}</h1>
    </>
  )
}

export default App