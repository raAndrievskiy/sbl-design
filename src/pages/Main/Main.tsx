import React from 'react'

import {
  FullScreenVideoText,
  BubblesInfo,
  About,
  Portfolio,
} from './components'

export const Main: React.FC = () => {
  return (
    <>
      <FullScreenVideoText />
      <BubblesInfo />
      <About />
      {/* <Portfolio /> */}
    </>
  )
}
