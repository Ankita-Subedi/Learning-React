import React from 'react'
import ring from '../assets/service/ring.png'
import food from '../assets/service/food.png'
import calender from '../assets/service/calender.png'
import camera from '../assets/service/camera.png'

const Service = () => {
  return (
    <div id='services' className='bg-customBlue h-auto'>
    <div className=' text-white container'>
      <p className='text-center text-3xl pt-8'>Our Services</p>
      <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 p-16'>
        <div className='flex flex-col items-center space-y-2'>
        <img className='w-12' src={ring} alt="ring"/>
        <p className='text-2xl'>Wedding Service</p>
        <p className='text-sm'>There are many variations of pass of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>

        <div className='flex flex-col items-center space-y-2'>
        <img className='w-12' src={food} alt="ring"/>
        <p className='text-2xl'>Food and Catering</p>
        <p className='text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>

        <div className='flex flex-col items-center space-y-2'>
        <img className='w-12' src={calender} alt="ring"/>
        <p className='text-2xl'>Event management</p>
        <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content</p>
        </div>

        <div className='flex flex-col items-center space-y-2'>
        <img className='w-12' src={camera} alt="ring"/>
        <p className='text-2xl'>Photography</p>
        <p className='text-sm'>There are many variations of pass of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Service
