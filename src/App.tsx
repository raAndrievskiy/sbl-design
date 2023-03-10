import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components'

import { Main, Premium, Special, AboutCompany } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/special" element={<Special />} />
        <Route path="/company" element={<AboutCompany />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
