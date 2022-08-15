import React from 'react'
import './index.css'

const FunctionComponent = () => {
  return (
    <h1>this is FunctionComponent</h1>
  )
}

class ClassComponent extends React.Component {
  render() {
    return (
      <h1>this is ClassComponent</h1>
    )
  }
}

export default function App() {

  return (
    <>
      <FunctionComponent />
      <ClassComponent />
    </>
  )
}
