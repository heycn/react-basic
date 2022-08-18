import React, { useState } from 'react'

const Son = ({ getSonMsg }) => {
  const msg = 'this is sonMsg'

  const clickHandler = () => getSonMsg(msg)

  return (
    <>
      {msg}
      <button onClick={clickHandler}>getSonMsg</button>
    </>
  )
}

export default function App() {
  const [msg, setMsg] = useState(void 0)
  const getSonMsg = sonMsg => setMsg(sonMsg)

  return (
    <>
      <Son getSonMsg={getSonMsg} />
      <h1>{msg}</h1>
    </>
  )
}
