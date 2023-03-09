import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { BubblesIcon } from '../../../../assets/icons'
import { Container } from '../../../../components'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Bubbles: React.FC = () => {
  return (
    <div className={styles.bubbles}>
      <Container>
        <span className="description">
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен.
        </span>
        <div className={styles.bubblesIconWrap}>
          <Tween
            to={{
              // y: '10%',
              // paddingBottom: '100px',
              scrollTrigger: {
                start: '1300vh 100vh',
                end: '100% 100%',
                scrub: true,
                // markers: true,
              },
            }}>
            <BubblesIcon className={styles.bubblesIcon} />
          </Tween>
          <Tween
            to={{
              scale: 2.5,
              // height: '100%',
              scrollTrigger: {
                start: '1000vh 100vh',
                end: '100% 100%',
                scrub: true,
                // markers: true,
              },
            }}>
            <div className={styles.bubblesBg} />
          </Tween>
        </div>
      </Container>
    </div>
  )
}
