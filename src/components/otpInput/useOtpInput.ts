import { useMemo, useRef } from 'react'
import { InputProps } from './otpInput.types'

const useOtpInput = (inputs: InputProps) => {
  const inputRefs = useRef<HTMLInputElement[]>([])

  const otpInputs = useMemo(() => {
    let index = 0
    return inputs
      .map((item) => {
        if (typeof item === 'number') {
          const newArray = Array.from({ length: item }, () => index++)
          return newArray
        } else {
          return item
        }
      })
      .flat()
  }, [inputs])

  return {
    inputRefs,
    otpInputs,
  }
}
export default useOtpInput
