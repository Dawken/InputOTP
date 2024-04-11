import React from 'react'
import OtpInput from '../components/otpInput/otpInput'

const Home = () => {
  const inputs = [3, '-', 7, '=', 2]

  return (
    <div className='h-full w-full flex items-center justify-center text-5xl'>
      <OtpInput inputs={inputs} />
    </div>
  )
}
export default Home
