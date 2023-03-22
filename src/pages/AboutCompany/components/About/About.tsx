import React from 'react'
import { Container, LineWhite } from '../../../../components'

import styles from './styles.module.scss'

export const About = () => {
  return (
    <div className={styles.about}>
      <Container>
        <LineWhite />
        <div className={styles.aboutTextWrap}>
          <h3 className={`h3 ${styles.aboutTitle}`}>Пару слов про нас</h3>
          <div className={styles.aboutText}>
            <span className={`color-white subtitle ${styles.aboutSubtitle}`}>
              Разрабатывая подобные идеи ты входишь в них с головой и со всем
              вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные.
            </span>
            <LineWhite />
            <span className={`color-white ${styles.aboutDescription}`}>
              Разрабатывая подобные идеи ты входишь в них с головой и со всем
              вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные. Разрабатывая.
            </span>
            <span className={`color-white ${styles.aboutDescription}`}>
              Разрабатывая подобные идеи ты входишь в них с головой и со всем
              вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные. Разрабатывая подобные идеи ты входишь в них с головой и
              со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные.
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}
