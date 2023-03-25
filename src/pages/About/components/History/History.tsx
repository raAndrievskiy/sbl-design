import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container, Title } from '../../../../components'
import { historyData } from './historyData'
import { Description, Images, Subtitle } from './components'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const History: React.FC = () => {
  return (
    <div className={`${styles.history} historyTrigger`}>
      <Container>
        <Title children="Начало" />
        <div className={styles.historyImgWrap}>
          <Subtitle
            children="Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные."
          />
          <div className={styles.imgWrap}>
            {historyData.map(item => (
              <div key={item.id} className={styles.imgBlock}>
                <Images src={item.img} />
                <Description description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
