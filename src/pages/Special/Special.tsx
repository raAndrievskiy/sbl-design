import React from 'react'
import { ImageBackground } from '../../components'
import { Characteristics, Portfolio } from './components'

export const Special: React.FC = () => {
  return (
    <>
      <ImageBackground text="Special" />
      <Characteristics />
      <Portfolio />
    </>
  )
}
