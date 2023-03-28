import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div className=' relative w-screen h-screen p-8 bg-green60 flex flex-col justify-center md:items-start'>
            <div className="relative z-10 bottom-28 self-start">
                <span className='text-3xl leading-9 text-helloColor'>Hello</span><span className='text-3xl leading-9 text-white '>Bank.</span>
            </div>
       <p className='font-medium text-[40px] text-white relative bottom-10'>Hi there!</p>
            <form action="" className='flex flex-col gap-3'>
                <input type="text" name='username' id='username' placeholder='Username' className='bg-green20 p-4 rounded-xl text-white text-2xl'/>
                <input type="password" name='password' id='password' placeholder='Password' className='bg-green20 p-4 rounded-xl text-white text-2xl'/>
                <input type="submit" className='absolute bottom-0 bg-green100 p-4 w-full text-white rounded-xl' value='Sign in' />
            </form>
            <div className='flex justify-between text-white mt-5'>
              <p className='font-medium'>Sign Up</p>
              <p>Need help signing in?</p>
            </div>
        </div>
    )
}

export default LoginPage
