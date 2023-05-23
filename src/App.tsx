import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Footer, Header, Preloader } from './components'
import { Main, Premium, Special, About } from './pages'
import premiumImg from './assets/images/premiumBg.png'
import specialImg from './assets/images/specialBg.jpeg'

const App: React.FC = () => {
  const loadImage = () => {
    const image = new Image()
    image.src = premiumImg && specialImg
  }

  // Вызов функции загрузки изображения
  loadImage()
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/special" element={<Special />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
