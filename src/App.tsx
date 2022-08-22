import { useEffect } from 'react'
import useWindowScroll from './hooks/useWindowScroll'

function App() {
  const y = useWindowScroll()

  useEffect(() => {
    console.log(y)
  }, [y])

  return (
    <>
      <div style={{ height: '99999px' }}></div>
    </>
  )
}

export default App
