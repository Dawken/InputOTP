import { HandleBackspaceProps } from '../otpInput.types'

const handleBackspace = ({
  item,
  keyValue,
  inputRefs,
}: HandleBackspaceProps) => {
  if (keyValue !== 'Backspace') return

  const currentInput = inputRefs.current[item]

  const previousInput = inputRefs.current[item - 1]

  if (previousInput && currentInput.value === '') {
    previousInput.focus()
  }

  currentInput.value = ''
}

export default handleBackspace
