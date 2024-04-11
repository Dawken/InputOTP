'use client'
import React from 'react'
import useOtpInput from './useOtpInput'
import { Props } from './otpInput.types'

const OtpInput = ({ inputs }: Props) => {
  const { inputRefs, otpInputs } = useOtpInput(inputs)

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center '>
          {otpInputs.map((item, index) => {
            return typeof item === 'number' ? (
              <input
                maxLength={1}
                className='w-10 h-12 rounded m-2 text-center capitalize text-2xl border-[1px] border-black/35 outline-none bg-zinc-900 focus:border-indigo-400 transition-colors duration-200 ease-in-out'
                key={index}
                ref={(ref) => {
                  inputRefs.current[item] = ref as HTMLInputElement
                }}
              />
            ) : (
              <div className='text-4xl' key={index}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
      <button className='flex justify-center text-lg font-medium bg-indigo-700 w-64 rounded p-1.5'>
        Continue
      </button>
    </div>
  )
}

export default OtpInput
