import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Container } from '../../../../components'
import elevatorImage1 from '../../../../assets/images/premium/elevator-01.png'
import elevatorImage2 from '../../../../assets/images/premium/elevator-02.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

const words = [
  'От',
  'идеи,',
  'до',
  'воплощения:',
  'Заказчик',
  'в',
  'процессе',
  'согласования',
  'выбирает',
  'материал',
  'и',
  'цветовую',
  'палитру',
  'внутренней',
  'отделки',
  'кабины,',
  'для',
  'интеграции',
  'дизайна',
  'лифта',
  'с',
  'холлом.',
]

export const AnimationTextAndImage: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    const textElement = textRef.current

    if (textElement && isPageLoaded) {
      const words = textElement.querySelectorAll(`.${styles.text}`)

      if (words) {
        gsap.to(words, {
          color: '#fff',
          duration: 0.8,
          delay: 0.5,
          stagger: 0.5,
          scrollTrigger: {
            trigger: '.premiumTextTrigger',
            start: 'top 100vh',
            end: 'bottom 100%',
            scrub: 2,
          },
        })
      }
    }
  }, [isPageLoaded])

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  return (
    <div className={styles.premiumTextWrap}>
      <Container>
        <div
          className={`${styles.premiumText} premiumTextTrigger`}
          ref={textRef}>
          {words.map((word, index) => (
            <span key={index} className={styles.text}>
              {word}
            </span>
          ))}
        </div>
        <div className={styles.premiumImages}>
          <img src={elevatorImage1} className={styles.elevatorImage} alt="" />
          <img src={elevatorImage2} className={styles.elevatorImage} alt="" />
        </div>
        <span className={`${styles.textImages} color-white`}>
          Пассажирские лифты Premium сегмента выпускаются с высотой кабины до
          3000 мм, г/п до 2500 кг, системой предоткрывания дверей при подъезде
          лифта к остановке. Лифты комплектуются роликовыми башмаками,
          обеспечивающими высочайший комфорт поездки в лифте.
        </span>
      </Container>
    </div>
  )
}
