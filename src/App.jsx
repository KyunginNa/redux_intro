import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState({ greeting: 'Hello world from hooked state using an object' })
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App