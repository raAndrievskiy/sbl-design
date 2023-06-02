import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Info, Statistics, History } from './components'

export const About: React.FC = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate(0)
  }

  refreshPage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Info />
      <Statistics />
      <History />
    </>
  )
}
