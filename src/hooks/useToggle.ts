import { useState } from 'react'

const useToggle = () => {
  const [value, setValue] = useState(false)

  const setTrue = () => {
    setValue(true)
  }

  const setFalse = () => {
    setValue(false)
  }

  return {
    value,
    setTrue,
    setFalse,
  }
}

export default useToggle
