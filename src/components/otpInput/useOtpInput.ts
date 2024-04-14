import { useRef } from 'react'
import { InputProps } from './otpInput.types'

const useOtpInput = (inputs: InputProps) => {
  const inputRefs = useRef<HTMLInputElement[]>([])

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

  return {
    inputRefs,
    otpInputs,
  }
}
export default useOtpInput
