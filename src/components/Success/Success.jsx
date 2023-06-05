import React from 'react'

const Success = ({succesPage}) => {
  return (
    <div className='fixed flex items-center justify-center bg-[rgb(255,255,255)] top-0 left-0 w-full h-screen z-[9999]'>
    <div className="login__item text-center px-[40px] py-2 bg-white w-[320px] rounded-md">
    <i onClick={succesPage} className=' cursor-pointer bx bx-x  text-3xl text-gray-500 text-end w-full' 
  ></i>

    <i className='bx bxs-badge-check text-9xl text-green-400'></i>

    <h1 className='text-xl font-semibold'>Спасибо за Вашу заявку</h1>
    <p className='text-gray-500'>Мы свяжимся с вами в ближайшее время</p>


    </div>
  


  </div>
  )
}

export default Success