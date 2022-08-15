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

  render() {
    return <button onClick={this.addNum}>{this.state.num}+1</button>
  }
}

export default function App() {
  return (
    <>
      <Demo />
    </>
  )
}
