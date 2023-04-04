import React from 'react'

import { ImageBackground } from '../../components'
import { AnimationTextAndImage, Icons, QualityWork, Slider } from './components'

import styles from './styles.module.scss'

export const Premium: React.FC = () => {
  return (
    <>
      <ImageBackground text="Premium" />
      <AnimationTextAndImage />
      <Icons />
      <Slider />
      <QualityWork />
    </>
  )
}
