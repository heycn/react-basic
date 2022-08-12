import React, { useState } from 'react'
import './index.css'

export default function App() {
  const [num, setNum] = useState(0)
  const myName = 'heycn'

  const isControlled = true

  return (
    <div className='App'>
      <h1>myNum: {myName}</h1>
      <span>
        <button onClick={() => setNum(num + 1)}>click me: num + 1</button>
        num: {num}
      </span>
      <div>
        我被控制了<span className={isControlled ? 'active' : ''}>111</span>
      </div>
    </div>
  )
}
