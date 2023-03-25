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
} from './components'

export const Main: React.FC = () => {
  const loader = useAppSelector(state => state.app.loader)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(setLoader(false)), 4000)
    if (loader) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  })

  return (
    <>
      {/* {loader ? <Preloader /> : null} */}
      <FullScreenVideoText />
      <BubblesInfo />
      <About />
      <Portfolio />
    </>
  )
}
