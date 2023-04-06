import React, { useEffect, useState } from 'react'
import { Container, LineWhite } from '../../../../components'

import styles from './styles.module.scss'

export const QualityWork: React.FC = () => {
  const [position, setPosition] = useState({ x: 0 })
  const circleRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setFromEvent = (event: any) => {
      setPosition({ x: event.clientX })
    }

    const circle = circleRef.current

    if (circle) {
      circle.addEventListener('mousemove', setFromEvent)
    }

    return () => {
      if (circle) {
        circle.removeEventListener('mousemove', setFromEvent)
      }
    }
  }, [])

  const circleStyle = {
    left: position.x === 0 ? '50%' : position.x,
    // transition: 'all 0s ease-out',
  }

  return (
    <div className={styles.qualityWorkWrap}>
      <Container>
        <div className={styles.qualityWork} ref={circleRef}>
          <div className={styles.circle} style={circleStyle} />
          <div className={styles.qualityTextWrap}>
            <span className={`${styles.qualityText} color-white`}>
              Качественная работа
            </span>
            <LineWhite />
            <span className={`${styles.qualityText} color-white`}>
              Точно в срок
            </span>
            <LineWhite />
            <span className={`${styles.qualityText} color-white`}>
              Братья Савичевы
            </span>
            <LineWhite />
            <span className={`${styles.qualityText} color-white`}>
              SBL DESIGN
            </span>
            <LineWhite />
          </div>
        </div>
      </Container>
    </div>
  )
}
