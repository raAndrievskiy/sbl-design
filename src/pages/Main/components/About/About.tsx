import React from 'react'
import gsap from 'gsap'
import { Tween, Reveal } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container, LineWhite } from '../../../../components'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const About: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <div className={`${styles.aboutWrap} aboutTrigger`}>
      <Container>
        <div className={styles.about}>
          <Tween
            to={{
              top: width <= 525 ? '50%' : '0px',
              scrollTrigger: {
                trigger: '.aboutTrigger',
                start: 'top 10%',
                end: 'bottom bottom',
                scrub: width <= 525 ? 6 : 2,
              },
            }}>
            <div className={styles.circleTurquoise} />
          </Tween>
          <Reveal repeat>
            <Tween
              to={{
                opacity: 1,
                paddingTop: 0,
                scrollTrigger: {
                  trigger: '.aboutTrigger',
                  start: 'top 10%',
                  end: 'bottom bottom',
                  scrub: width <= 525 ? 6 : 2,
                },
              }}>
              <h3 className={`h3 ${styles.aboutTitle}`}>
                Мы знаем как воплатить вашу идею в жизнь
              </h3>
            </Tween>
          </Reveal>
          <LineWhite />
          <span
            className={`description color-white ${styles.aboutDescription}`}>
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
            идеи ты входишь в них с головой и со всем вниманием к процессу не
            ожидая ничего взамен.
          </span>
          <div className={styles.typeElevator}>
            <LineWhite />
            <div className={styles.elevator}>
              <span className="color-white elevator-name">Premium</span>
              <span className="color-white elevator-description">
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен.
              </span>
            </div>
            <LineWhite />
            <div className={styles.elevator}>
              <span className="color-white elevator-name">Special</span>
              <span className="color-white elevator-description">
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен.
              </span>
            </div>
            <LineWhite />
          </div>
        </div>
      </Container>
    </div>
  )
}
