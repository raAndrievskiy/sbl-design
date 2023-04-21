import React, { useEffect } from 'react'

import { Info, Statistics, History } from './components'

export const About: React.FC = () => {
  useEffect(() => {
    window.addEventListener('beforeunload', function () {
      window.scrollTo(0, 0)
    })
  }, [])
  return (
    <>
      <Info />
      <Statistics />
      <History />
    </>
  )
}
