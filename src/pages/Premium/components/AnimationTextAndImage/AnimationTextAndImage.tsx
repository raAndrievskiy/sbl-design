import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Container } from '../../../../components'
import elevatorImage1 from '../../../../assets/images/premium/elevator-01.png'
import elevatorImage2 from '../../../../assets/images/premium/elevator-02.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const AnimationTextAndImage: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    const textElement = textRef.current

    if (textElement && isPageLoaded) {
      const words = textElement.querySelectorAll(`.${styles.text}`)

      if (words) {
        gsap.to(words, {
          color: '#fff',
          duration: 0.8,
          delay: 0.5,
          stagger: 0.5,
          scrollTrigger: {
            trigger: '.premiumTextTrigger',
            start: 'top 100vh',
            end: 'bottom 100%',
            scrub: 2,
          },
        })
      }
    }
  }, [isPageLoaded])

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  return (
    <div className={styles.premiumTextWrap}>
      <Container>
        <div
          className={`${styles.premiumText} premiumTextTrigger`}
          ref={textRef}>
          <span className={styles.text}>Разрабатывая</span>
          <span className={styles.text}>подобные</span>
          <span className={styles.text}>идеи</span>
          <span className={styles.text}>ты</span>
          <span className={styles.text}>входишь</span>
          <span className={styles.text}>в</span>
          <span className={styles.text}>них</span>
          <span className={styles.text}>с</span>
          <span className={styles.text}>головой</span>
          <span className={styles.text}>и</span>
          <span className={styles.text}>со</span>
          <span className={styles.text}>всем</span>
          <span className={styles.text}>вниманием</span>
          <span className={styles.text}>к</span>
          <span className={styles.text}>процессу</span>
          <span className={styles.text}>не</span>
          <span className={styles.text}>ожидая</span>
          <span className={styles.text}>ничего</span>
          <span className={styles.text}>взамен</span>
          <span className={styles.text}>разрабатывая</span>
          <span className={styles.text}>подобные</span>
          <span className={styles.text}>.</span>
        </div>
        <div className={styles.premiumImages}>
          <img src={elevatorImage1} className={styles.elevatorImage} alt="" />
          <img src={elevatorImage2} className={styles.elevatorImage} alt="" />
        </div>
        <span className={`${styles.textImages} color-white`}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
          идеи ты входишь в них с головой.
        </span>
      </Container>
    </div>
  )
}
