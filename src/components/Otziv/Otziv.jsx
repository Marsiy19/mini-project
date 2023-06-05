import React from 'react'
import './Otziv.scss'
import img1 from '../../assets/img/Frame1.png'
import img2 from '../../assets/img/Frame2.png'
import img3 from '../../assets/img/Frame3.png'


const Otziv = () => {
  return (
    <div id='otziv' className='otziv bg-white w-full mb-10'>
      <div className="otziv__section w-[80%] mx-auto text-center">
          <h1 className=' head__text text-5xl font-bold mt-[50px] mb-[30px]'>Отзывы</h1>

          <div className="otziv__container flex items-center justify-center gap-3">

            <div className="content user1 border p-5 border-gray-200 flex flex-col gap-3 rounded-md shadow-2xl">

                <div className="user__name flex items-center gap-3">
                  <img src={img1} alt="" />
                  <b>Nargiza B</b>
                </div>

                <div className="otziv__about text-start">
                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bxs-star text-yellow-400"></i>                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bx-star text-yellow-400"></i>                  <i className="bx bx-star text-yellow-400"></i>
                </div>

                <p className='text-sm text-gray-400 text-start'>Отличный учебный центр! Замечательная команда, готовая всегда помочь. Здесь я занималась английским языком у Мисс Дарьи и математикой у Александра Сергеевича. </p>
            </div>

            <div className="content border p-5 border-gray-200 flex flex-col gap-3 rounded-md shadow-2xl">
                <div className="user__name flex items-center gap-3">
                  <img src={img2} alt="" />
                  <b>Азамат Н</b>
                </div>

                <div className="otziv__about text-start">
                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bxs-star text-yellow-400"></i>                  
                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bxs-star text-yellow-400"></i>                  
                  <i className="bx bxs-star text-yellow-400"></i>
                </div>

                <p className='text-sm text-gray-400 text-start'>Учебный центр был профессиональным  и представлял учебный материал понятным и доступным способом. Я получил индивидуальный подход и отличную поддержку. </p>
            </div>


            <div className="content border p-5 border-gray-200 flex flex-col gap-3 rounded-md shadow-2xl">
                <div className="user__name flex items-center gap-3">
                  <img src={img3} alt="" />
                  <b>Султан А</b>
                </div>

                <div className="otziv__about text-start">
                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bxs-star text-yellow-400"></i>                  
                  <i className="bx bxs-star text-yellow-400"></i>
                  <i className="bx bxs-star text-yellow-400"></i>                  
                  <i className="bx bx-star text-yellow-400"></i>
                </div>

                <p className='text-sm text-gray-400 text-start'>Учебный центр, который я посетил, предоставляет качественное образование. Преподаватели проявляют заинтересованность в успехе своих студентов и готовы помочь им в любое время. </p>
            </div>

          </div>
      </div>
      
    </div>
  )
}

export default Otziv