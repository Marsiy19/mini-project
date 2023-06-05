import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Kursi from '../components/Kursi/Kursi'
import Prepodavateli from '../components/Prepodavateli/Prepodavateli'
import Otziv from '../components/Otziv/Otziv'
import Login from '../components/LoginItem/Login'

const Routes = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kursi' element={<Kursi />} />
            <Route path='/prepodavateli' element={<Prepodavateli />} />
            <Route path='/otzyv' element={<Otziv />} />
            <Route path='/login' element={<Login />} />
        </Routes>
  )
}

export default Routes