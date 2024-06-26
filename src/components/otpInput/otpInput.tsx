'use client'
import React from 'react'
import useOtpInput from './otpInput.hooks'
import { Props } from './otpInput.types'
import ErrorIcon from '@mui/icons-material/Error'

const OtpInput = ({ inputs }: Props) => {
  const {
    inputRefs,
    otpInputs,
    isInputLengthInvalid,
    handleKeyDown,
    submitInputs,
    handleBackspace,
    handleOnChange,
    handlePaste,
  } = useOtpInput(inputs)

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-wrap'>
          {otpInputs.map((item, index) => {
            return typeof item === 'number' ? (
              <input
                maxLength={1}
                inputMode='numeric'
                className={`w-10 h-12 rounded m-2 text-center capitalize text-2xl border-[1px] ${
                  isInputLengthInvalid ? 'border-rose-500' : 'border-black/35'
                } outline-none bg-zinc-900 focus:border-indigo-400 transition-colors duration-200 ease-in-out`}
                key={index}
                ref={(ref) => {
                  if (ref) {
                    inputRefs.current[item] = ref
                  }
                }}
                onChange={() => handleOnChange({ item })}
                onKeyDown={(event) => {
                  handleBackspace({ item, keyValue: event.key })
                  handleKeyDown({ item, event })
                }}
                onPaste={(event) => handlePaste({ item, event })}
              />
            ) : (
              // I use index as a key because i assume array will not change, otherwise i would generate id
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
        onClick={submitInputs}
      >
        Continue
      </button>
    </div>
  )
}

export default OtpInput
