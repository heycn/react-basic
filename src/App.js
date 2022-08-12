import React, { useState } from 'react'

export default function App() {
  const [num, setNum] = useState(0)
  const myName = 'heycn'

  return (
    <div className='App'>
      <h1>myNum: {myName}</h1>
      <span>
        <button onClick={() => setNum(num + 1)}>click me: num + 1</button>
        num: {num}
      </span>
    </div>
  )
}
