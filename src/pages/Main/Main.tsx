import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Preloader } from '../../components'
import { useAppSelector } from '../../hook/app'
import { setLoader } from '../../store/appSlice'

import {
  FullScreenVideoText,
  BubblesInfo,
  About,
  Portfolio,
  PortfolioMobile,
} from './components'
import useWindowSize from '../../hook/useWindowSize'

export const Main: React.FC = () => {
  const loader = useAppSelector(state => state.app.loader)
  const dispatch = useDispatch()
  const [width] = useWindowSize()

  useEffect(() => {
    setTimeout(() => dispatch(setLoader(false)), 0)
    if (loader) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  })

  window.scrollTo(0, 0)

  return (
    <>
      <Preloader />
      <FullScreenVideoText />
      <BubblesInfo />
      <About />
      {width > 1024 ? <Portfolio /> : <PortfolioMobile />}
    </>
  )
}
