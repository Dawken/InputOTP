import { HandleOnChangeProps } from '../otpInput.types'

const handleOnChange = ({
  item,
  inputRefs,
  isInputLengthInvalid,
  handleInputLengthValid,
}: HandleOnChangeProps) => {
  const currentInput = inputRefs.current[item]

  const nextInput = inputRefs.current[item + 1]

  if (nextInput && currentInput.value !== '') {
    nextInput.focus()
  }
  if (isInputLengthInvalid) {
    handleInputLengthValid()
  }
}

export default handleOnChange
