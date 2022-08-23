import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [message, setMessage] = useLocalStorage('myKey', 'myValue1')

  setTimeout(() => {
    //FIXME: "string | Dispatch<SetStateAction<string>>" 类型的部分要素不可调用。
    setMessage('myValue2')
  }, 2000)

  return (
    <>
      <h1>{message as string}</h1>
    </>
  )
}

export default App
