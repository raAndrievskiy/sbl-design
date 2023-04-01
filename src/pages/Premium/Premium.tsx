import React from 'react'

import { ImageBackground } from '../../components'
import { AnimationTextAndImage } from './components'
import styles from './styles.module.scss'

export const Premium: React.FC = () => {
  return (
    <>
      <ImageBackground text="Premium" />
      <AnimationTextAndImage />
    </>
  )
}
