import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Footer, Header, Preloader } from './components'
import { Main, Premium, Special, About } from './pages'

gsap.registerPlugin(ScrollTrigger)

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const app = appRef.current

    gsap.to(app, {
      scrollTrigger: {
        trigger: app,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 60,
        markers: true,
      },
    })
  }, [])

  return (
    <div ref={appRef}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/special" element={<Special />} />
          <Route path="/about" element={<About />} />
          <Route path="/preloader" element={<Preloader />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
