import { HandlePasteProps } from '../otpInput.types'

const handlePaste = ({ item, event, inputRefs }: HandlePasteProps) => {
  const clipboardData = event.clipboardData.getData('Text')

  const onlyDigits = clipboardData.replace(/\D/g, '')

  let inputIndex = 0

  for (
    let i = item;
    i < onlyDigits.length + item && i < inputRefs.current.length;
    i++
  ) {
    inputRefs.current[i].value = onlyDigits[inputIndex]
    inputRefs.current[i].focus()
    inputIndex++
  }
}
export default handlePaste
