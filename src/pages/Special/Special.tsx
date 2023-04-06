import React, { useEffect } from 'react'
import { ImageBackground } from '../../components'
import { Characteristics, Portfolio } from './components'

export const Special: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ImageBackground text="Special" />
      <Characteristics />
      <Portfolio />
    </>
  )
}
