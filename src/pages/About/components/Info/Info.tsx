import React from 'react'
import { Tween } from 'react-gsap'

import { Container, LineWhite } from '../../../../components'
import styles from './styles.module.scss'

export const Info: React.FC = () => {
  return (
    <div className={styles.about}>
      <Container>
        <LineWhite />
        <div className={styles.aboutTextWrap}>
          <Tween
            from={{ opacity: 0, yPercent: 10 }}
            to={{ yPercent: 0, opacity: 1 }}
            duration={1}>
            <h3 className={`h3 ${styles.aboutTitle}`}>Пару слов про нас</h3>
          </Tween>
          <div className={styles.aboutText}>
            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white subtitle ${styles.aboutSubtitle}`}>
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен. Разрабатывая
                подобные.
              </span>
            </Tween>

            <LineWhite />
            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white ${styles.aboutDescription}`}>
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен. Разрабатывая
                подобные. Разрабатывая.
              </span>
            </Tween>

            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white ${styles.aboutDescription}`}>
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен. Разрабатывая
                подобные. Разрабатывая подобные идеи ты входишь в них с головой
                и со всем вниманием к процессу не ожидая ничего взамен.
                Разрабатывая подобные.
              </span>
            </Tween>
          </div>
        </div>
      </Container>
    </div>
  )
}
