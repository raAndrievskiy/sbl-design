import React from 'react'
import gsap from 'gsap'
import { Tween, Reveal } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const LineWhite: React.FC = () => {
  return (
    <Reveal repeat>
      <Tween
        to={{
          width: '100%',
          scrollTrigger: {
            trigger: '.aboutTrigger',
            start: 'top 10%',
            end: 'bottom bottom',
          },
        }}>
        <div className={`${styles.lineWhite} lineTrigger`} />
      </Tween>
    </Reveal>
  )
}
