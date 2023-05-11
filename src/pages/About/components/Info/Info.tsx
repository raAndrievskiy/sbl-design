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
                Мы специализируемся на производстве, монтаже и обслуживании
                PREMIUM и SPECIAL лифтов. Разнообразие скоростей (1.0-3.0 м/с),
                типов помещений и размеров кабин позволяет выбрать оптимальное
                решение.
              </span>
            </Tween>

            <LineWhite />
            <Tween
              from={{ opacity: 0, yPercent: 10 }}
              to={{ yPercent: 0, opacity: 1 }}
              duration={1}>
              <span className={`color-white ${styles.aboutDescription}`}>
                Лифты PREMIUM имеют кабины до 3000 мм, г/п до 2500 кг и систему
                предоткрывания дверей. Они оснащены роликовыми башмаками для
                комфортной поездки. Кабины проходят предварительную сборку на
                заводе, имеют вибро-шумоизоляцию для тишины и удовольствия
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
