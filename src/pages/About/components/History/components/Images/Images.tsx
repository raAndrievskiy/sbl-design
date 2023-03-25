import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type ImagesProps = {
  src: string
}

export const Images: React.FC<ImagesProps> = ({ src }) => {
  return (
    <Tween
      to={{
        yPercent: -500,
        scrollTrigger: {
          trigger: '.historyTrigger',
          start: 'top 10%',
          end: 'bottom bottom',
          // pin: '.historyTrigger',
          scrub: true,
          markers: true,
        },
      }}>
      <img className={styles.elevator} src={src} alt="" />
    </Tween>
  )
}
