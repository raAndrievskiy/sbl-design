import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Info, Statistics, History } from './components'
import { useAppDispatch, useAppSelector } from '../../hook/app'
import { setReloadAbout } from '../../store/appSlice'

export const About: React.FC = () => {
  const navigate = useNavigate()
  const about = useAppSelector(state => state.app.about)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)

    if (about) {
      dispatch(setReloadAbout(false))
    } else {
      const isFirstLoad = sessionStorage.getItem('isFirstLoadAbout')
      if (!isFirstLoad) {
        sessionStorage.setItem('isFirstLoadAbout', 'true')
      } else {
        navigate(0)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Info />
      <Statistics />
      <History />
    </>
  )
}
