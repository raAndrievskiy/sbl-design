import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { Info, Statistics, History } from './components'
import { useAppDispatch, useAppSelector } from '../../hook/app'
import { setReloadAbout } from '../../store/appSlice'

export const About: React.FC = () => {
  // window.scrollTo(0, 0)
  const location = useLocation()
  const navigate = useNavigate()
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  setTimeout(() => setIsFirstLoad(false), 1)
  if (isFirstLoad) {
    // window.location.reload()
  }

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
