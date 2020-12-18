import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState('Hello world from hooked state')
  // let message = 'Hello World from variable'
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App