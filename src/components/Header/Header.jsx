import React, { useState } from 'react'
import './Header.scss'
import img from '../../assets/img/zyro-image.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'
import Login from '../LoginItem/Login'

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    const [modal, setModal] = useState(false)

    const openColse = () => {
      setModal(!modal)
    }

    const activatedMenu = () => {
        setMenuActive(!menuActive)
    }



  return (
    <div className='header py-[25px] z-50 fixed w-full top-0 shadow-md'>

        <div className="header__elements w-[80%] mx-auto flex items-center justify-between">

            <div className="logo min-w-[120px]">
                <Link to={'/'}>

                    <img src={`${img}`} className='w-[100px]' alt="" />
                </Link>
            </div>

            <div className="menu font-bold ">

               <a href="#home"> Главная</a>
               <a href="#kursi"> Курсы</a>
               <a href="#prepodavatel" className='ease-in duration-300'> Преподаватели</a>
               <a href="#ceny"> Цены</a>
               <a href="#otziv"> Отзывы</a>

            </div>

            <div className={`menu__phone flex items-center ${menuActive ? 'active__menu' : "" }`}>
                <i onClick={activatedMenu} className='bx bx-menu'></i>
              <button onClick={openColse} ><i  className='bx bxs-user'></i>  </button> 
            </div>

            <Drawer open={menuActive}
            onClose={() => setMenuActive(false)}>
                <div className="menu flex font-bold flex-col text-4xl ">

                    <a href="#home"> Главная</a>
                    <a href="#kursi"> Курсы</a>
                    <a href="#prepodavatel">Преподаватели</a>
                    <a href="#ceny">Цены</a>
                    <a href="#otziv">Отзывы</a>

                </div>

            </Drawer>

            <button onClick={openColse} className='bg-blue-600 px-6 py-4 font-bold rounded-md text-xl text-white transition duration-300 active:scale-110'  >Записаться</button>

        </div>

        {
          modal ? <Login setModal={setModal} openColse={openColse}/> : null
        }
    </div>
  )
}

export default Header