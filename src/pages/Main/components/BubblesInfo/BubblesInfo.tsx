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
        <span className={`subtitle ${styles.bubblesDescription}`}>
          Внедряя передовые технологии в области лифтостроения мы предоставляем
          Заказчику решение задач «под ключ» на самом высоком уровне.
        </span>
        <div className={`${styles.bubblesIconWrap} bubblesTrigger`}>
          <BubblesIcon className={styles.bubblesIcon} />
          <Tween
            to={{
              scale: width > 1024 ? 2.5 : 3,
              scrollTrigger: {
                trigger: '.bubblesTrigger',
                start: 'top-=65% 100vh',
                end: 'bottom+=15% bottom',
                scrub: 2,
              },
            }}>
            <div className={styles.bubblesBg} />
          </Tween>
        </div>
      </Container>
    </div>
  )
}
