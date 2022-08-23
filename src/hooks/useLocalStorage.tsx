import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, defaultValue: string) {
  const [message, setMessage] = useState(defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])

  return [message, setMessage]
}
