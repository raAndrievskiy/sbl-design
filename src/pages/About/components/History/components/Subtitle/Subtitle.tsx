import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type SubtitleProps = {
  children: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  const subtitleRef = useRef<HTMLSpanElement>(null)
  const subtitleWrapRef = useRef<HTMLDivElement>(null)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    const subtitle = subtitleRef.current
    const subtitleWrap = subtitleWrapRef.current
    console.log('subtitleWrap: ', subtitleWrap?.clientHeight)

    if (subtitleWrap && subtitle && isPageLoaded) {
      gsap.to(subtitle, {
        position: 'fixed',
        left: subtitle?.style.left,
        scrollTrigger: {
          trigger: subtitleWrap,
          start: 'top-=350vh top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
        onComplete: () => {
          subtitle.style.position = 'absolute'
          subtitle.style.left = '0px'
        },
      })
    }
  }, [isPageLoaded])

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  return (
    <div className={styles.historySubtitleWrap} ref={subtitleWrapRef}>
      <span className={styles.historySubtitle} ref={subtitleRef}>
        {children}
      </span>
    </div>
  )
}
