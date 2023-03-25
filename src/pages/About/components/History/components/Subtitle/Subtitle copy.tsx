import React from 'react'
import gsap from 'gsap'
import { Timeline, Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type SubtitleProps = {
  children: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Timeline
      target={<span className={styles.historySubtitle}>{children}</span>}>
      <Tween
        // stagger={0}
        to={{
          position: 'static',
          scrollTrigger: {
            trigger: '.historyTrigger',
            start: 'top top',
            end: 'bottom 100%',
            markers: true,
          },
        }}
      />
      <Tween
        // stagger={1}
        from={{
          position: 'fixed',
          top: '51.5vh',
          left: '2.2vw',
          // scrollTrigger: {
          //   trigger: '.historyTrigger',
          //   start: 'top 10%',
          //   end: 'bottom 100%',
          //   markers: true,
          // },
        }}
      />
      <Tween
        // stagger={2}
        to={{
          position: 'static',
          // scrollTrigger: {
          //   trigger: '.historyTrigger',
          //   start: 'bottom top',
          //   end: 'bottom 100%',
          // },
        }}
      />
    </Timeline>
  )
}
