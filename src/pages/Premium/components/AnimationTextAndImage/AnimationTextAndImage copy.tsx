import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Tween, SplitWords } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from '../../../../components'
import elevatorImage1 from '../../../../assets/images/premium/elevator-01.png'
import elevatorImage2 from '../../../../assets/images/premium/elevator-02.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const AnimationTextAndImage: React.FC = () => {
  return (
    <div className={styles.premiumTextWrap}>
      <Container>
        <div className={`${styles.premiumText} premiumTextTrigger`}>
          <Tween
            to={{
              color: '#F6F6F6',
              scrollTrigger: {
                trigger: '.premiumTextTrigger',
                start: 'top 100vh',
                end: 'bottom+=40vh 100%',
                scrub: true,
              },
            }}
            stagger={0.5}>
            <SplitWords wrapper={<div className={styles.text} />}>
              Разрабатывая подобные идеи ты входишь в них с головой и со всем
              вниманием к процессу не ожидая ничего взамен разрабатывая
              подобные.
            </SplitWords>
          </Tween>
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
        {/* </div> */}
      </Container>
    </div>
  )
}
