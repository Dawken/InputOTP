type InputProps = (string | number)[]

type InputRefsProps = React.MutableRefObject<HTMLInputElement[]>

type HandleOnChangeProps = {
  item: number
}

type HandleBackspaceProps = {
  item: number
  keyValue: string
}

type HandleKeyDownProps = {
  item: number
  event: React.KeyboardEvent<HTMLInputElement>
}

type HandlePasteProps = {
  item: number
  event: React.ClipboardEvent<HTMLInputElement>
}

type Props = {
  inputs: InputProps
}

export type {
  InputProps,
  InputRefsProps,
  HandleOnChangeProps,
  HandleBackspaceProps,
  HandleKeyDownProps,
  HandlePasteProps,
  Props,
}
