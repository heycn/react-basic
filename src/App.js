import React from 'react'
import './index.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  addNum = () => {
    this.setState({ num: this.state.num + 1 })
  }

  // 这是错误的写法
  fn() {
    console.log(this)
  }

  render() {
    return (
      <>
        <button onClick={this.addNum}>{this.state.num}+1</button>
        <button onClick={this.fn}>click</button>
      </>
    )
  }
}

export default function App() {
  return (
    <>
      <Demo />
    </>
  )
}
