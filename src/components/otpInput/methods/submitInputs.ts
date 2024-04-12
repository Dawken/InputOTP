import { SubmitInputsProps } from '../otpInput.types'

const submitInputs = ({
  inputRefs,
  otpInputs,
  handleInputLengthInvalid,
}: SubmitInputsProps) => {
  const values = inputRefs.current.map((ref) => {
    return ref.value
  })

  const resultArray = otpInputs.map((input) => {
    if (typeof input === 'number') {
      return values.shift() || ''
    } else {
      return input || ''
    }
  })

  const inputsResult = resultArray.join('')

  if (inputsResult.length < otpInputs.length) {
    handleInputLengthInvalid()
  } else {
    alert(inputsResult)
  }
}
export default submitInputs
