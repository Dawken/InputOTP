'use client'
import React from 'react'
import useOtpInput from './useOtpInput'
import { Props } from './otpInput.types'
import ErrorIcon from '@mui/icons-material/Error'
import handleOnChange from './methods/handleOnChange'
import submitInputs from './methods/submitInputs'
import useToggle from 'hooks/useToggle'
import handleBackspace from './methods/handleBackSpace'
import handleKeyDown from './methods/handleKeyDown'
import handlePaste from './methods/handlePaste'

const OtpInput = ({ inputs }: Props) => {
  const { inputRefs, otpInputs } = useOtpInput(inputs)

  const {
    value: isInputLengthInvalid,
    setTrue: handleInputLengthInvalid,
    setFalse: handleInputLengthValid,
  } = useToggle()

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center '>
          {otpInputs.map((item, index) => {
            return typeof item === 'number' ? (
              <input
                maxLength={1}
                className={`w-10 h-12 rounded m-2 text-center capitalize text-2xl border-[1px] ${
                  isInputLengthInvalid ? 'border-rose-500' : 'border-black/35'
                } outline-none bg-zinc-900 focus:border-indigo-400 transition-colors duration-200 ease-in-out`}
                key={index}
                ref={(ref) => {
                  inputRefs.current[item] = ref as HTMLInputElement
                }}
                onChange={() =>
                  handleOnChange({
                    item,
                    inputRefs,
                    isInputLengthInvalid,
                    handleInputLengthValid,
                  })
                }
                onKeyDown={(event) => {
                  handleBackspace({ item, keyValue: event.key, inputRefs })
                  handleKeyDown({
                    item,
                    keyValue: event.key,
                    inputRefs,
                    isInputLengthInvalid,
                    handleInputLengthValid,
                  })
                }}
                onPaste={(event) => handlePaste({ item, event, inputRefs })}
              />
            ) : (
              <div className='text-4xl' key={index}>
                {item}
              </div>
            )
          })}
        </div>
        {isInputLengthInvalid ? (
          <div className='w-full flex items-center text-sm p-2 text-error'>
            <ErrorIcon sx={{ fontSize: '18px' }} />
            Provide all characters
          </div>
        ) : (
          <div className='h-9' />
        )}
      </div>
      <button
        className='flex justify-center text-lg font-medium bg-indigo-700 w-64 rounded p-1.5'
        onClick={() =>
          submitInputs({ inputRefs, otpInputs, handleInputLengthInvalid })
        }
      >
        Continue
      </button>
    </div>
  )
}

export default OtpInput
