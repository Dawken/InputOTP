import { HandleKeyDownProps } from '../otpInput.types'

const handleKeyDown = ({
  item,
  event,
  inputRefs,
  isInputLengthInvalid,
  handleInputLengthValid,
}: HandleKeyDownProps) => {
  const previousInput = inputRefs.current[item - 1]
  const currentInput = inputRefs.current[item]
  const nextInput = inputRefs.current[item + 1]

  const keyValue = event.key

  if (keyValue === 'ArrowLeft' && item > 0) {
    previousInput.focus()
  } else if (keyValue === 'ArrowRight' && item < inputRefs.current.length - 1) {
    nextInput.focus()
  }

  const isString = !/^\d*$/.test(keyValue)

  const isShiftInstertPaste = event.shiftKey && event.key === 'Insert'

  const isCtrlVPaste = event.ctrlKey && event.key.toLowerCase() === 'v'

  if (isString && !isShiftInstertPaste && !isCtrlVPaste) {
    event.preventDefault()
  }

  if (
    isString ||
    item >= inputRefs.current.length - 1 ||
    currentInput.value === ''
  )
    return

  if (nextInput.value !== '') {
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
