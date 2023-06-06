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
                Мы специализируемся на производстве, монтаже и сервисе лифтового
                оборудования PREMIUM и SPECIAL классов. Выпускаемое оборудование
                со скоростью от 1.0 м/с до 3.0 м/с, с машинным и без машинного
                помещения имеет большой выбор размеров и отделки кабин, возможно
                изготавливать лифты с приямком 400 мм и оголовком 3000 мм.
              </span>
            </Tween>

            <LineWhite />
            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white ${styles.aboutDescription}`}>
                Пассажирские лифты PREMIUM сегмента выпускаются с высотой кабины
                до 3000 мм, г/п до 2500 кг, системой предоткрывания дверей при
                подъезде лифта к остановке. Лифты комплектуются роликовыми
                башмаками, обеспечивающими высочайший комфорт поездки в лифте.
                Кабины лифтов PREMIUM класса проходят предварительную сборку на
                заводе-изготовителе, а также комплектуются вибро-шумоизоляцией,
                что позволяет добиваться невероятного ощущения тишины и
                удовольствия от поездки в лифте.
              </span>
            </Tween>

            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white ${styles.aboutDescription}`}>
                В лифтах для высотных и специализированных зданий используется
                система рекуперации электроэнергии, которая сможет существенно
                сэкономить потребляемое электричество при работе лифтов.
              </span>
            </Tween>
          </div>
        </div>
      </Container>
    </div>
  )
}
