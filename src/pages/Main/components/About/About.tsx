import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Tween, Reveal } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container, LineWhite } from '../../../../components'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export const About: React.FC = () => {
  const [width] = useWindowSize()
  const aboutTitleRef = useRef<HTMLDivElement>(null)
  const [isAboutTitleVisible, setIsAboutTitleVisible] = useState(false)

  useEffect(() => {
    const currentRef = aboutTitleRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutTitleVisible(entry.isIntersecting)
      },
      { rootMargin: '0px' },
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

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
                yPercent: 0,
                scrollTrigger: {
                  trigger: '.aboutTrigger',
                  start: 'top-=50% 10%',
                  end: 'bottom bottom',
                  scrub: true,
                },
              }}>
              <h3
                className={
                  isAboutTitleVisible
                    ? `h3 ${styles.aboutTitle} ${styles.aboutTitleVisible}`
                    : `h3 ${styles.aboutTitle} ${styles.aboutTitleHidden}`
                }
                ref={aboutTitleRef}>
                МЫ ЗНАЕМ, КАК ВОПЛОТИТЬ ВАШУ ИДЕЮ В ЖИЗНЬ
              </h3>
            </Tween>
          </Reveal>
          <LineWhite />
          <span className={`subtitle color-white ${styles.aboutSubtitle}`}>
            Для удобства Заказчика проекты ведутся в CRM 1C Bitrix24 ©️, что
            позволяет оперативно обмениваться информацией, следить за
            выполнением работ по графику, а также добавлять необходимые
            документы и контролировать рабочий процесс.
          </span>
          <>
            <LineWhite />
            <Link to="/premium" className={styles.elevator}>
              <Reveal repeat>
                <Tween
                  to={{
                    opacity: 1,
                    scrollTrigger: {
                      trigger: '.aboutTrigger',
                      start: 'top 10%',
                      end: 'bottom bottom',
                    },
                  }}>
                  <span className="color-white elevator-name">Premium</span>
                  <span className="color-white elevator-description">
                    Индивидуальный подход и высочайшее качество оборудования,
                    монтажа и сервиса.
                  </span>
                </Tween>
              </Reveal>
            </Link>
            <LineWhite />
            <Link to="/special" className={styles.elevator}>
              <Reveal repeat>
                <Tween
                  to={{
                    opacity: 1,
                    scrollTrigger: {
                      trigger: '.aboutTrigger',
                      start: 'top 10%',
                      end: 'bottom bottom',
                    },
                  }}>
                  <span className="color-white elevator-name">Special</span>
                  <span className="color-white elevator-description">
                    Нестандартные и узко профилированные виды лифтового
                    оборудования.
                  </span>
                </Tween>
              </Reveal>
            </Link>
            <LineWhite />
          </>
        </div>
      </Container>
    </div>
  )
}
