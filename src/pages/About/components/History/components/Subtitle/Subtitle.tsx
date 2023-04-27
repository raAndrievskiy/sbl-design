import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type SubtitleProps = {
  children: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  const subtitleRef = useRef<HTMLSpanElement>(null)
  const subtitleWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const subtitle = subtitleRef.current
    const subtitleWrap = subtitleWrapRef.current

    if (subtitleWrap && subtitle) {
      gsap.to(subtitle, {
        position: 'fixed',
        scrollTrigger: {
          trigger: subtitleWrap,
          start: 'top-=350vh top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
        onComplete: () => {
          subtitle.style.position = 'absolute'
        },
      })
    }
  }, [])

  return (
    // <Tween
    //   to={{
    //     yPercent: 0,
    //     scrollTrigger: {
    //       trigger: '.historyTrigger',
    //       start: 'top 10%',
    //       end: 'bottom bottom',
    //       scrub: true,
    //     },
    //   }}>
    <div className={styles.historySubtitleWrap} ref={subtitleWrapRef}>
      <span className={styles.historySubtitle} ref={subtitleRef}>
        {children}
      </span>
    </div>
    // </Tween>
  )
}
