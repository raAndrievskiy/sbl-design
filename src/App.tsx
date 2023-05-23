import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Footer, Header, Preloader } from './components'
import { Main, Premium, Special, About } from './pages'
import ds from './assets/images/premiumBg.png'

const App: React.FC = () => {
  const loadImage = () => {
    const image = new Image()
    image.src = ds

    // Обработчик события загрузки изображения
    image.onload = () => {
      console.log(12)
    }

    // Обработчик события ошибки загрузки изображения
    image.onerror = () => {
      // Произошла ошибка загрузки изображения
      // Можете выполнить дополнительные действия здесь
    }
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
