import React from 'react'
import Home from './components/Home/Home'
import Kursi from './components/Kursi/Kursi'
import Prepodavateli from './components/Prepodavateli/Prepodavateli'
import Otziv from './components/Otziv/Otziv'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Home />
      <Kursi />
      <Prepodavateli />
      <Otziv />
      <Footer />
    </div>
  )
}

export default App