import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [message, setMessage] = useLocalStorage('myKey', 'myValue')

  setTimeout(() => {
    setMessage('myValue2')
  }, 2000)

  return (
    <>
      <h1>{message as string}</h1>
    </>
  )
}

export default App
