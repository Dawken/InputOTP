import { useRef, useState } from 'react'
import {
  HandleBackspaceProps,
  HandleKeyDownProps,
  HandleOnChangeProps,
  HandlePasteProps,
  InputProps,
} from './otpInput.types'

const useOtpInput = (inputs: InputProps) => {
  const inputRefs = useRef<HTMLInputElement[]>([])

  const [isInputLengthInvalid, setIsInputLengthInvalid] = useState(false)

  let index = 0
  const otpInputs = inputs
    .map((item) => {
      if (typeof item === 'number') {
        const newArray = Array.from({ length: item }, () => index++)
        return newArray
      } else {
        return item
      }
    })
    .flat()

  const submitInputs = () => {
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
      setIsInputLengthInvalid(true)
    } else {
      alert(inputsResult)
    }
  }

  const handleKeyDown = ({ item, event }: HandleKeyDownProps) => {
    const previousInput = inputRefs.current[item - 1]
    const currentInput = inputRefs.current[item]
    const nextInput = inputRefs.current[item + 1]

    const keyValue = event.key

    if (keyValue === 'ArrowLeft' && item > 0) {
      previousInput.focus()
    } else if (
      keyValue === 'ArrowRight' &&
      item < inputRefs.current.length - 1
    ) {
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
      setIsInputLengthInvalid(false)
    }
  }

  const handleBackspace = ({ item, keyValue }: HandleBackspaceProps) => {
    if (keyValue !== 'Backspace') return

    const currentInput = inputRefs.current[item]

    const previousInput = inputRefs.current[item - 1]

    if (previousInput && currentInput.value === '') {
      previousInput.focus()
    }

    currentInput.value = ''
  }

  const handleOnChange = ({ item }: HandleOnChangeProps) => {
    const currentInput = inputRefs.current[item]

    const nextInput = inputRefs.current[item + 1]

    if (nextInput && currentInput.value !== '') {
      nextInput.focus()
    }
    if (isInputLengthInvalid) {
      setIsInputLengthInvalid(false)
    }
  }

  const handlePaste = ({ item, event }: HandlePasteProps) => {
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

  return {
    inputRefs,
    otpInputs,
    isInputLengthInvalid,
    handleKeyDown,
    submitInputs,
    handleBackspace,
    handleOnChange,
    handlePaste,
  }
}
export default useOtpInput
