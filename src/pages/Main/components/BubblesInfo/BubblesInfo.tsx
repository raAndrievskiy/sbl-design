import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { BubblesIcon } from './BubblesIcon'
import { Container } from '../../../../components'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const BubblesInfo: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <div className={styles.bubbles}>
      <Container>
        <span className={`description ${styles.bubblesDescription}`}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен.
        </span>
        <div className={`${styles.bubblesIconWrap} bubblesTrigger`}>
          <BubblesIcon className={styles.bubblesIcon} />
          <Tween
            to={{
              // scale: width > 1024 ? 2.5 : 5.5,
              scale: 2.5,
              scrollTrigger: {
                start: '850vh 100vh',
                end: '75% 100%',
                scrub: 2,
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
