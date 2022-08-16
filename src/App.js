import React, { useState } from 'react'

class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'this is message'
    }
  }

  fn = e => this.setState({ message: e.target.value })

  render() {
    return (
      <input
        type='text'
        value={this.state.message}
        onChange={e => this.fn(e)}
      />
    )
  }
}

const Demo2 = () => {
  const [message, setMessage] = useState('this is message')

  const changeInput = e => setMessage(e.target.value)

  return (
    <input
      type='text'
      value={message}
      onChange={e => changeInput(e)}
    />
  )
}

export default function App() {
  return (
    <>
      Demo1: <Demo1 />
      <br />
      Demo2: <Demo2 />
    </>
  )
}
