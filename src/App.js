import React, { createRef } from 'react'

class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  msgRef = createRef()

  getMsg = () => console.log(this.msgRef.current.value)

  render() {
    return (
      <>
        <input type='text' ref={this.msgRef} />
        <button onClick={this.getMsg}>get msg</button>
      </>
    )
  }
}

const Demo2 = () => {
  const msgRef = createRef()
  const getMsg = () => console.log(msgRef.current.value)

  return (
    <>
      <input type='text' ref={msgRef} />
      <button onClick={getMsg}>get msg</button>
    </>
  )
}

export default function App() {
  return (
    <>
      <Demo1 />
      <br />
      <Demo2 />
    </>
  )
}
