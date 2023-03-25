import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type SubtitleProps = {
  children: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Tween
      to={{
        yPercent: 0,
        scrollTrigger: {
          trigger: '.historyTrigger',
          start: 'top 10%',
          end: 'bottom bottom',
          pin: '.historyTrigger',
          scrub: true,
        },
      }}>
      <span className={styles.historySubtitle}>{children}</span>
    </Tween>
  )
}
