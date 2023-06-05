import React, { useState } from 'react'
import Header from '../Header/Header'
import './Home.scss'
import Button from '../Button/Button'
import imageHome from '../../assets/img/education.png'
import imgShapka1 from '../../assets/img/shapka-1.png'
import imgShapka2 from '../../assets/img/shapka-2.png'
import imgShapka3 from '../../assets/img/shapka-3.png'
import Login from '../LoginItem/Login'
import { Link } from 'react-router-dom'


const Home = () => {

  const [modal, setModal] = useState(false)

  const openColse = () => {
    setModal(!modal)
  }



  return (
    <div className='home pt-[80px]' id='home'>
        <Header />
        <div className="home__content w-[80%]  mx-auto">

          <div className="home__section px-4 py-5 rounded-md bg-white mt-[100px] flex items-center justify-between">


            <div className="home__text flex flex-col gap-6">

              <div className="text__main">
                <span>Real-Harvard</span>: ваш ключ к образованию!"
              </div>
              <div className="text__body">

                  Наш учебный центр предоставляет первоклассное образование и персонализированный подход, чтобы вы достигли своих целей и осуществили мечты
              </div>

              <div className="btn__home w-48">

              <button onClick={openColse} className='bg-blue-600 px-7 py-4 font-bold rounded-md text-xl text-white transition duration-300 active:scale-110'  >Записаться</button>
              </div>
            </div>

            <div className="home__img min-w-[220px]">
              <img src={`${imageHome}`} alt="" />
            </div>

          </div>


        </div>

        <div className="home__about w-[80%] mx-auto mt-[85px]  flex items-center justify-center bg-white rounded-md shadow-xl shadow-blue-100">

          <div className="container  py-6  flex gap-1 items-center justify-center flex-wrap">

            <div className="sections w-[300px] px-5 flex gap-2">
              <img src={`${imgShapka1}`} className='w-[90px] h-[90px]' alt="" />
              <div className="texts">
                <h1 className='font-extrabold text-blue-600'>80+</h1>
                <h6 className='font-bold text-xs'>
                  На данный момент в учебном центре обучается
                </h6>
              </div>
            </div>

            <div className="sections w-[300px] px-5 flex gap-2">
              <img src={`${imgShapka2}`} className='w-[90px] h-[90px]' alt="" />
              <div className="texts">
                <h1 className='font-extrabold text-blue-600'>16+</h1>
                <h6 className='font-bold text-xs'>
                  Количество преподавателей в учебном центре  
                </h6>
              </div>
            </div>

            <div className="sections w-[300px] px-5 flex gap-2">
              <img src={`${imgShapka3}`} className='w-[90px] h-[90px]' alt="" />
              <div className="texts">
                <h1 className='font-extrabold text-blue-600'>6+</h1>
                <h6 className='font-bold text-xs'>
                  В учебном центра предоставлено курсов
                </h6>
              </div>
            </div>



          </div>
        </div>

        {
          modal ? <Login setModal={setModal} openColse={openColse}/> : null
        }

    </div>
  )
}

export default Home