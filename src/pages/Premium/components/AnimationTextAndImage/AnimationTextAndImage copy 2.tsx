import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
// import { Tween, SplitChars } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap-trial/SplitText'

import { Container } from '../../../../components'
import elevatorImage1 from '../../../../assets/images/premium/elevator-01.png'
import elevatorImage2 from '../../../../assets/images/premium/elevator-02.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const AnimationTextAndImage: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const text = textRef.current

  //   const mySplitText = new SplitText(text, { type: 'words' }),
  //     splitTextTimeline = gsap.timeline()

  //   mySplitText.split({ type: 'chars, words' })
  //   splitTextTimeline.from(mySplitText.chars, {
  //     duration: 0.6,
  //     scale: 4,
  //     autoAlpha: 0,
  //     rotationX: -180,
  //     transformOrigin: '100% 50%',
  //     ease: 'back',
  //     stagger: 0.02,
  //   })
  // }, [])

  useEffect(() => {
    const text = textRef.current
    console.log('text: ', text)

    const split = new SplitText(text, { type: 'chars, words' })
    gsap.to(split.chars, {
      color: '#F6F6F6',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.premiumTextTrigger',
        // start: 'top+=90vh 100vh',
        start: 'top 100vh',
        // end: 'bottom+=40vh 100%',
        end: 'bottom 100%',
        scrub: true,
        // pin: '.premiumTextTrigger',
        markers: true,
      },
    })
  }, [])

  // color: '#F6F6F6',
  //   scrollTrigger: {
  //     trigger: '.premiumTextTrigger',
  //     // start: 'top+=90vh 100vh',
  //     start: 'top 100vh',
  //     // end: 'bottom+=40vh 100%',
  //     end: 'bottom 100%',
  //     scrub: true,
  //     // pin: '.premiumTextTrigger',
  //     markers: true,
  //   },

  return (
    <div className={styles.premiumTextWrap}>
      <Container>
        <div
          className={`${styles.premiumText} premiumTextTrigger`}
          ref={textRef}>
          <div className={styles.text} />
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен разрабатывая подобные.
        </div>

        {/* <div className={styles.premiumImagesWrap}> */}
        <div className={styles.premiumImages}>
          <img src={elevatorImage1} className={styles.elevatorImage} alt="" />
          <img src={elevatorImage2} className={styles.elevatorImage} alt="" />
        </div>
        <span className={`${styles.textImages} color-white`}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
          идеи ты входишь в них с головой.
        </span>
        {/* </div> */}
      </Container>
    </div>
  )
}
