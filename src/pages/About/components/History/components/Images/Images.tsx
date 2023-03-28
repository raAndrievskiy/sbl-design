import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { historyData } from '../../historyData'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Images: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {historyData.map(item => (
        <Tween
          key={item.id}
          to={{
            yPercent: -200,
            scrollTrigger: {
              trigger: '.historyTrigger',
              start: 'top 10%',
              end: 'bottom bottom',
              // pin: '.historyTrigger',
              scrub: true,
              // markers: true,
            },
          }}>
          <img
            className={`${styles.elevator} imageTrigger`}
            src={item.img}
            alt=""
          />
        </Tween>
      ))}
    </div>
  )
}
