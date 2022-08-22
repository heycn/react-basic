import { useState } from 'react'

export default function useWindowScroll() {
  const [y, setY] = useState<number>(0)
  window.addEventListener('scroll', () => {
    const HEIGHT = document.documentElement.scrollTop
    setY(HEIGHT)
  })
  return y
}
