import React from 'react'
import { gsap } from 'gsap'
import { Tween, ScrollTrigger } from 'react-gsap'

import premiumBg from '../../assets/images/premiumBg.png'
import specialBg from '../../assets/images/specialBg.jpeg'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

interface ImageBackgroundTypes {
  text: string
}

export const ImageBackground: React.FC<ImageBackgroundTypes> = ({ text }) => {
  return (
    <div className={`${styles.typeElevator} typeElevatorTrigger`}>
      <Tween
        from={{
          width: '20vw',
        }}
        to={{
          width: '100vw',
        }}
        duration={1.5}>
        <img
          src={text === 'Special' ? specialBg : premiumBg}
          alt=""
          className={`${styles.typeElevatorMain} typeElevatorMainTrigger`}
        />
      </Tween>
      <Tween
        from={{ left: '101%' }}
        to={{
          left: '50%',
        }}
        duration={1.5}>
        <span className={`${styles.typeElevatorMainText} color-white`}>
          SBL DESIGN – {text}
        </span>
      </Tween>
    </div>
  )
}
