import React from 'react'
import './index.css'

const FunctionComponent = () => {
  const clickFn = (e, msg) => {
    console.log(e)
    console.log(msg)
  }
  return <h1 onClick={e => clickFn(e, 'this is msg')}>Click me</h1>
}

class ClassComponent extends React.Component {
  render() {
    return <h1>this is ClassComponent</h1>
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
