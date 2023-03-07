import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { BubblesIcon } from '../../../../assets/icons/'
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
          {/* <Tween
            to={{
              y: '-10%',
              scrollTrigger: {
                trigger: `${styles.bubbles}`,
                start: '0px 0px',
                end: '100% 100%',
                scrub: true,
                markers: true,
              },
            }}>
            <BubblesIcon
              className={styles.bubblesIcon}
              classNameCircle={styles.circle}
            />
          </Tween> */}
          <div className={styles.bubblesBg} />
        </div>
      </Container>
    </div>
  )
}
