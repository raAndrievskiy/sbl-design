import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { historyData } from '../../historyData'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type DescriptionProps = {
  description: string
  yPercentFrom: number
  yPercentTo: number
  opacityFrom: number
  opacityTo: number
  start: string
  end: string
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  yPercentFrom,
  yPercentTo,
  opacityFrom,
  opacityTo,
  start,
  end,
}) => {
  return (
    <Tween
      from={{ yPercent: yPercentFrom, opacity: opacityFrom }}
      to={{
        yPercent: yPercentTo,
        opacity: opacityTo,
        scrollTrigger: {
          trigger: '.historyTrigger',
          start: start,
          end: end,
          scrub: true,
          // markers: true,
        },
      }}>
      <span className={styles.imgDescription}>{description}</span>
    </Tween>
  )
}
