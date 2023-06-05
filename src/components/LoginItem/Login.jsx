import React, { useState } from 'react'
import Success from '../Success/Success'

const Login = ({setModal, openColse}) => {

  const [succes, setSucces] = useState(false)

  const succesPage = () => {
    setSucces(!succes)
  }




  return (
    <div className='fixed flex items-center justify-center bg-[rgba(0,0,0,.7)] top-0 left-0 w-full h-screen z-[9999]'>
      <div className="login__item text-center px-[40px] py-2 bg-white w-[320px] rounded-md">
      <i  className=' cursor-pointer bx bx-x  text-3xl text-gray-500 text-end w-full' 
    onClick={openColse}></i>
        <span className='flex'><h1 className='text-xl'>Заказать обратный звонок</h1>

    </span>
        <p className='text-gray-400'>Оставьте свои контакнтый данные, мы свяжемся с вами и проконсультируем по любому вопросу</p>
        <form className='flex flex-col mt-5 gap-6' onClick={(e) => e.preventDefault()}>
          
          <input type="text" placeholder='Ваше имя' className='w-full outline-none px-4 py-2 bg-gray-200' required/>

          <input type="text" placeholder='+998 00 000 00 00' className='w-full outline-none px-4 py-2 bg-gray-200' required/>
          <button onClick={succesPage} className='bg-blue-600 rounded-md text-white py-4  font-semibold'>Заказать обратный звонок</button>
        </form>
      </div>
    
    {
      succes ? <Success succesPage={succesPage} setModal={setModal} /> : null
    }

    </div>
  )
}

export default Login