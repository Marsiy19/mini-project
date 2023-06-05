import React from 'react'
import './Footer.scss'
import Iframe from 'react-iframe'

const Footer = () => {





  return (
    <div className='footer w-full py-10'>
      
        <div className="container w-[80%] mx-auto flex items-center justify-center gap-8 flex-wrap">
            <div  className="location flex items-center justify-center gap-7">
                
            <Iframe className='rounded-xl shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.399544811828!2d59.61817157585573!3d42.46179037118364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a6af56411cd%3A0x8433b90d326d03af!2zQS4gRG9zbmF6YXJvdiBrbydzaGVzaSwgTnVrdXMsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1685971302708!5m2!1sru!2s" width="350" height="250" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>

            </div>

            <div className="footer__text flex flex-col gap-4">
                <h1 className='text-3xl font-bold'>Контактная информация</h1>
                <span className='flex items-center gap-3'>
                    <i className='bx bxs-edit-location text-3xl text-blue-500'></i>
                    <p>Адрес: г. Нукус, ул. Досназарова</p>
                 </span>

                 <span className='flex items-center gap-3'>
                    <i className='bx bxs-envelope text-3xl text-blue-500' ></i>
                    <p>email@gmail.com</p>
                 </span>

                 <span>
                    <h1>Мы в соцсетях</h1>

                   <span className='flex items-center gap-6'>
                        <i className='bx bxl-facebook-circle text-3xl text-gray-400 cursor-pointer'></i>
                        <i className='bx bxl-instagram-alt text-3xl text-gray-400 cursor-pointer'></i>
                        <i className='bx bxl-telegram text-3xl text-gray-400 cursor-pointer'></i>

                   </span> 
                 </span>
            </div>
        </div>
    </div>
  )
}

export default Footer