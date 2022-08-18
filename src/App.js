import React, { useState } from 'react'

const ListItem = ({ item, deleteItem }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => deleteItem(item.id)}>删除</button>
    </div>
  )
}

export default function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: '超级好吃的棒棒糖',
      price: 18.8,
      info: '开业大酬宾，全场8折'
    },
    {
      id: 2,
      name: '超级好吃的大鸡腿',
      price: 34.2,
      info: '开业大酬宾，全场8折'
    },
    {
      id: 3,
      name: '超级无敌的冰激凌',
      price: 14.2,
      info: '开业大酬宾，全场8折'
    }
  ])

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <>
      {list.map(item => (
        <ListItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </>
  )
}
