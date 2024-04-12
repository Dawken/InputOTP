type InputProps = (string | number)[]

type InputRefsProps = React.MutableRefObject<HTMLInputElement[]>

type SubmitInputsProps = {
  inputRefs: InputRefsProps
  otpInputs: InputProps
  handleInputLengthInvalid: () => void
}

type HandleOnChangeProps = {
  item: number
  inputRefs: InputRefsProps
  isInputLengthInvalid: boolean
  handleInputLengthValid: () => void
}

type HandleBackspaceProps = {
  item: number
  keyValue: string
  inputRefs: InputRefsProps
}

type HandleKeyDownProps = {
  item: number
  keyValue: string
  inputRefs: InputRefsProps
  isInputLengthInvalid: boolean
  handleInputLengthValid: () => void
}

type Props = {
  inputs: InputProps
}

export type {
  InputProps,
  InputRefsProps,
  SubmitInputsProps,
  HandleOnChangeProps,
  HandleBackspaceProps,
  HandleKeyDownProps,
  Props,
}
