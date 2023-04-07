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
                Умеем встроить лифт в любое пространство
              </h3>
            </Tween>
          </Reveal>
          <Reveal repeat>
            <Tween
              from={{ yPercent: 15, opacity: 0 }}
              to={{ yPercent: 0, opacity: 1 }}>
              <span className={`color-white ${styles.portfolioDescription}`}>
                Разрабатывая подобные идеи ты входишь в них с головой и со всем
                вниманием к процессу не ожидая ничего взамен. Разрабатывая
                подобные идеи ты входишь в них с головой и со всем вниманием к
                процессу не ожидая ничего взамен.
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
