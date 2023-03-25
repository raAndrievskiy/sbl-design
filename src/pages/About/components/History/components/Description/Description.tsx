import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type DescriptionProps = {
  description: string
}

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <Tween
      to={{
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: '.historyTrigger',
          start: 'top 10%',
          end: 'bottom+=20% bottom',
          // pin: '.historyTrigger',
          scrub: true,
          // markers: true,
        },
      }}>
      <span className={styles.imgDescription}>{description}</span>
    </Tween>
  )
}
