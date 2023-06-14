import React from 'react'
import { gsap } from 'gsap'
import { Reveal, Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from '../../../../components'
import previewElevator01 from '../../../../assets/images/special/portfolio/preview-elevator-01.png'
import previewElevator02 from '../../../../assets/images/special/portfolio/preview-elevator-02.png'
import { portfolioImagesData } from './portfolioImagesData'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Portfolio: React.FC = () => {
  return (
    <div className={`${styles.portfolio} portfolioTrigger`}>
      <Container>
        <div className={styles.portfolioText}>
          <Reveal repeat>
            <Tween
              from={{ yPercent: 15, opacity: 0 }}
              to={{ yPercent: 0, opacity: 1 }}>
              <h3 className="specialTitle color-white">
                МЫ НЕ СПРАШИВАЕМ, КАК ЭТО СДЕЛАТЬ, МЫ ГОТОВИМ РЕШЕНИЕ ДЛЯ ВАШЕЙ
                ЗАДАЧИ.
              </h3>
            </Tween>
          </Reveal>
          <Reveal repeat>
            <Tween
              from={{ yPercent: 15, opacity: 0 }}
              to={{ yPercent: 0, opacity: 1 }}>
              <span className={`color-white ${styles.portfolioDescription}`}>
                Специализированные лифты для сложных химических и электронных
                производств со степенями защиты IP, огнестойкостью EI, а также
                любыми другими индивидуальными требованиям (повышенная и
                пониженная температура, атмосферные осадки, радиация, пыле-влаго
                и вибро-шумо защищенные) – это наш профиль.
              </span>
            </Tween>
          </Reveal>
          <Reveal repeat>
            <Tween
              from={{ yPercent: 15, opacity: 0 }}
              to={{
                yPercent: 0,
                opacity: 1,
              }}>
              <img
                src={previewElevator01}
                className={styles.previewImg1}
                alt=""
              />
            </Tween>
          </Reveal>
          <Reveal repeat>
            <Tween
              from={{ xPercent: -15, opacity: 0 }}
              to={{
                xPercent: 0,
                opacity: 1,
              }}>
              <img
                src={previewElevator02}
                className={styles.previewImg2}
                alt=""
              />
            </Tween>
          </Reveal>
        </div>
        <div className={styles.portfolioImages}>
          {portfolioImagesData.map(img => (
            <img
              className={`${styles[img.className]} ${styles.portfolioImage}`}
              src={img.src}
              alt=""
              key={img.id}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
