import { HandlePasteProps } from '../otpInput.types'

const handlePaste = ({ item, event, inputRefs }: HandlePasteProps) => {
  const clipboardData = event.clipboardData.getData('Text')
  const pastedData = clipboardData.split('')

  let inputIndex = 0

  for (
    let i = item;
    i < pastedData.length + item && i < inputRefs.current.length;
    i++
  ) {
    inputRefs.current[i].value = pastedData[inputIndex]
    inputRefs.current[i].focus()
    inputIndex++
  }
}
export default handlePaste
