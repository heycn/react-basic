import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()

const Parent = () => {
  return (
    <div style={{ border: '1px solid blue', margin: '16px' }}>
      Parent
      <Son />
    </div>
  )
}

const Son = () => {
  return (
    <div style={{ border: '1px solid red', margin: '16px' }}>
      Son, this data:
      <Consumer>{value => value}</Consumer>
    </div>
  )
}

export default function App() {
  const data = ` this is App's data`

  return (
    <Provider value={data}>
      <div style={{ border: '1px solid black' }}>
        App
        <Parent />
      </div>
    </Provider>
  )
}
