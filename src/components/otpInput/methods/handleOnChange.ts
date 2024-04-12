import { InputRefsProps } from '../otpInput.types'

const handleOnChange = (index: number, inputRefs: InputRefsProps) => {
  const currentInput = inputRefs.current[index]

  const nextInput = inputRefs.current[index + 1]

  if (nextInput && currentInput.value !== '') {
    nextInput.focus()
  }
}

export default handleOnChange
