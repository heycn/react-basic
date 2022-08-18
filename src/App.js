import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Test = ({ list }) => {
  return (
    <>
      <div>
        {list.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </>
  )
}

Test.propTypes = {
  // 自定义规则
  list: PropTypes.array
}

export default function App() {
  return (
    <>
      <Test list={[1, 2, 3]} />
    </>
  )
}
