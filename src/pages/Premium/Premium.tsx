import React, { useEffect } from 'react'

import { ImageBackground } from '../../components'
import {
  AnimationTextAndImage,
  Icons,
  Letter,
  QualityWork,
  Slider,
} from './components'

import styles from './styles.module.scss'

export const Premium: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ImageBackground text="Premium" />
      <AnimationTextAndImage />
      {/* <Icons /> */}
      <Letter />
      <Slider />
      <QualityWork />
    </>
  )
}
