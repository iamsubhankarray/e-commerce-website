import React from 'react'
import IInputField from './InputField'

const LoginPage = () => {
  return (
    <div className=' container mx-auto ' >
      <h1 className='text-5xl m-5'>login Page</h1>

    <div className='w-fit bg-slate-400 '>
        <div className='max-w-screen-md h-96 justify-center center align-sub'>

        <IInputField title={"email"}/>
        <IInputField title={"passwprd"}/>
        </div>
    </div>
    </div>
  )
}

export default LoginPage