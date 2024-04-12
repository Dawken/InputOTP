import { HandleKeyDownProps } from '../otpInput.types'

const handleKeyDown = ({
  item,
  keyValue,
  inputRefs,
  isInputLengthInvalid,
  handleInputLengthValid,
}: HandleKeyDownProps) => {
  const previousInput = inputRefs.current[item - 1]
  const currentInput = inputRefs.current[item]
  const nextInput = inputRefs.current[item + 1]

  if (keyValue === 'ArrowLeft' && item > 0) {
    previousInput.focus()
  } else if (keyValue === 'ArrowRight' && item < inputRefs.current.length - 1) {
    nextInput.focus()
  }

  const isSingleCharacter = keyValue.length === 1

  if (
    !isSingleCharacter ||
    item >= inputRefs.current.length - 1 ||
    currentInput.value === ''
  )
    return

  const isCursorOnEnd = inputRefs.current[item].selectionStart

  if (!isCursorOnEnd && nextInput.value !== '') {
    currentInput.value = keyValue
  } else {
    nextInput.value = keyValue
  }
  nextInput.focus()

  if (isInputLengthInvalid) {
    handleInputLengthValid()
  }
}

export default handleKeyDown
