import React from 'react'
import './Prepodavateli.scss'
import user1 from '../../assets/img/user1.png'
import user2 from '../../assets/img/user2.png'
import user3 from '../../assets/img/user3.png'


const Prepodavateli = () => {
  return (
    <div id='prepodavatel' className='prepodavatel flex pt-[100px] items-center justify-center'>
      <div className="prepodavatel__container text-center w-[80%]  mx-auto">

        <h1 className='text-5xl text__head font-bold'>Наши преподаватели</h1>

        <div className="prepodavatel__user flex items-center justify-center mt-10">

          <div className="teacher flex items-center justify-center gap-4 ">

            <div className="user user_1 w-[250px]">
              <div className="bg-white h-[310px] flex flex-col items-center justify-center rounded-xl text-center py-[20px] px-[60px] gap-3">
                  <img className='w-[200px]' src={user1} alt="" />
                  <h1 className='font-bold text-lg'>Камила Хаджаева</h1>
                  <h1 className='text-sm font-bold'>Ваш преподаватель английского языка и IELTS</h1>
              </div>
            </div>

            <div className="user w-[250px]">

              <div className="bg-white h-[310px] flex flex-col items-center justify-center rounded-xl text-center py-[20px] px-[60px] gap-3">
                  <img className='w-[200px]' src={user2} alt="" />
                  <h1 className='font-bold text-lg'>Джахонгир Шухратович</h1>
                  <h1 className='text-sm font-bold'>Ваш преподаватель русского языка</h1>
              </div>
            </div>

            <div className="user w-[250px]">
              <div className="bg-white h-[310px] flex flex-col items-center justify-center rounded-xl text-center py-[20px] px-[60px] gap-3">
                  <img className='w-[200px]' src={user3} alt="" />
                  <h1 className='font-bold text-lg'>Анна Андреевна</h1>
                  <h1 className='text-sm font-bold'>Ваш преподаватель математики</h1>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Prepodavateli