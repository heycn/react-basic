import React from 'react'

const Son = ({ getSonMsg }) => {
  const msg = 'this is sonMsg'

  return (
    <>
      {msg}
      <button onClick={() => getSonMsg(msg)}>getSonMsg</button>
    </>
  )
}

export default function App() {
  const getSonMsg = sonMsg => console.log(sonMsg)

  return (
    <>
      <Son getSonMsg={getSonMsg} />
    </>
  )
}
