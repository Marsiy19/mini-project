import React, { useState } from 'react'
import imgKurs1 from '../../assets/img/kurs1.png'
import imgKurs2 from '../../assets/img/kurs2.png'
import imgKurs3 from '../../assets/img/kurs3.png'
import Button from '../Button/Button'
import './Kursi.scss'
import Login from '../LoginItem/Login'


const Kursi = () => {

  const [modal, setModal] = useState(false)

  const openColse = () => {
    setModal(!modal)
  }


  return (
    <div id='kursi' className='kurs__container  flex mt-[300px] items-center justify-center h-screen'>

      <div className="content w-[80%] mx-auto text-center">
        <h1 className='content__text'>Наши Курсы</h1>
        <div className="sections  flex items-center justify-center gap-5">

          <div className="kurs kurs__angl rounded-xl py-5 px-8 border border-gray-500 flex flex-col items-center justify-center text-center gap-5 ">
              <img src={imgKurs1} alt="" />
              <h1 className='text-[32px] font-bold'>Английский язык</h1>
              <button className='bg-blue-600 px-7 py-4 font-bold rounded-md text-xl text-white transition duration-300 active:scale-110' onClick={openColse} >Записаться</button>
          </div>

          <div className="kurs kurs__rus rounded-xl py-5 px-8 border border-gray-500 flex flex-col items-center justify-center text-center gap-5 sh">
              <img src={imgKurs2} alt="" />
              <h1 className='text-[32px] font-bold'>Русский язык</h1>
              <button className='bg-blue-600 px-7 py-4 font-bold rounded-md text-xl text-white transition duration-300 active:scale-110'onClick={openColse}  >Записаться</button>
          </div>


          <div className="kurs rounded-xl py-5 px-8 border border-gray-500 flex flex-col items-center justify-center text-center gap-5">
              <img src={imgKurs3} alt="" />
              <h1 className='text-[32px] font-bold'>Математика</h1>
              <button className='bg-blue-600 px-7 py-4 font-bold rounded-md text-xl text-white transition duration-300 active:scale-110' onClick={openColse} >Записаться</button>
          </div>

        </div>
      </div>

      {
          modal ? <Login setModal={setModal} openColse={openColse}/> : null
        }
      
    </div>
  )

}

export default Kursi