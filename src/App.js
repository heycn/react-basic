import React from 'react'
import './index.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'this is message'
    }
  }

  fn = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <>
        <input
          type='text'
          value={this.state.message}
          onChange={e => this.fn(e)}
        />
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
