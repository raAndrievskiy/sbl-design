import React from 'react'
import { Container, Title } from '../../../../components'

import { historyData } from './historyData'
import styles from './styles.module.scss'

export const History: React.FC = () => {
  return (
    <div className={styles.history}>
      <Container>
        <Title children="Как все начиналось" />
        <div className={styles.historyImgWrap}>
          <span className={styles.historySubtitle}>
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
          </span>
          {historyData.map(item => (
            <div key={item.id} className={styles.imgWrap}>
              <img src={item.img} alt="" />
              <span className={styles.imgDescription}>{item.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
