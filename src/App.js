import React from 'react'

const Test = props => {
  const { data = 10 } = props

  return (
    <>
      <div>{data}</div>
    </>
  )
}

export default function App() {
  return (
    <>
      <Test data={123} />
    </>
  )
}
