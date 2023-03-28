import React from 'react'
import Title from './Title'

export const Card = () => {
  return (
    <div className='flex flex-col gap-6 px-4 py-6 bg-green80 text-white relative'>
        <Title />
        <p className='text-lg font-bold'>4535 9037 8278 7825</p>
        <div className='flex justify-start  items-center'>
            <div className='flex flex-col'>
                <p className='text-xs '>Valid Till</p>
                <p className='font-bold'>09/26</p>
            </div>
        </div>
            <div className='absolute'></div>
            <div className='absolute'></div>
            <div className='absolute w-10 h-10 rounded-full bg-black'></div>
            <div className='absolute'></div>
            <i className="fa-solid fa-wifi absolute top-6 right-4 text-xl"></i>
            <i className="fa-brands fa-cc-visa absolute bottom-6 right-4 text-3xl"></i>
    </div>
  )
}
