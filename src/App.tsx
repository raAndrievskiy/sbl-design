import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Header, Preloader } from './components'

import { Main, Premium, Special, About } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/special" element={<Special />} />
        <Route path="/about" element={<About />} />
        <Route path="/preloader" element={<Preloader />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
