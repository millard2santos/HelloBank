import React from 'react'
import Title from '../Title/Title'
import './Card.css'

export const Card = () => {
  return (
    <div className='flex flex-col gap-6 p-4 w-[380px] bg-green80 text-white relative overflow-hidden rounded-3xl shadow-md'>
      <Title />
      <p className='text-lg font-bold'>4535 9037 8278 7825</p>
      <div className='flex justify-start  items-center'>
        <div className='flex flex-col'>
          <p className='text-xs '>Valid Till</p>
          <p className='font-bold'>09/26</p>
        </div>
      </div>
      <div id='bigCircle' className='absolute w-80 h-52 rounded-full bg-green20 opacity-20  '></div>
      <div id='smallCircle' className='absolute w-64 h-40 rounded-full bg-green20 opacity-20  '></div>
      <div className='absolute flex items-center opacity-20 right-5 inset-y-4'>
        <div className='relative w-10 h-10 rounded-[50%] roun bg-green20'></div>
        <div id='triangle' className='relative w-0 h-0 border-l-[100px] border-l-green20 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent '></div>
      </div>

      <i className="fa-solid fa-wifi absolute top-6 right-4 text-xl"></i>
      <i className="fa-brands fa-cc-visa absolute bottom-6 right-4 text-3xl"></i>
    </div>
  )
}
