import React from 'react'

import { aboutMock } from './aboutMock'
import { Container, LineWhite } from '../../../../components'
import styles from './styles.module.scss'

export const About: React.FC = () => {
  return (
    <div className={styles.aboutWrap}>
      <Container>
        <div className={styles.about}>
          <div className={styles.circleTurquoise} />
          <h3 className={`h3 ${styles.aboutTitle}`}>
            Мы знаем как воплатить вашу идею в жизнь
          </h3>
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
