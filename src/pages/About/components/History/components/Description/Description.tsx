import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { historyData } from '../../historyData'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Description: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      {historyData.map(item => (
        <Tween
          key={item.id}
          from={{ yPercent: item.yPercentFrom, opacity: item.opacityFrom }}
          to={{
            yPercent: item.yPercentTo,
            opacity: item.opacityTo,
            scrollTrigger: {
              trigger: '.historyTrigger',
              start: item.start,
              end: item.end,
              scrub: true,
              // markers: true,
            },
          }}>
          <span className={styles.imgDescription}>{item.description}</span>
        </Tween>
      ))}
    </div>
  )
}
