import React from 'react'
import './index.css'

const FunctionComponent = () => {
  const clickFn = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <h1 onClick={clickFn}>
      <a href='https://baidu.com'>跳转</a>
    </h1>
  )
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
