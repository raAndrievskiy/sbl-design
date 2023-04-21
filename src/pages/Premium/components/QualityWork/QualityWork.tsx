import React, { useEffect, useState } from 'react'

import { Container, LineWhite } from '../../../../components'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

export const QualityWork: React.FC = () => {
  const [position, setPosition] = useState({ x: 0 })
  const circleRef = React.useRef<HTMLDivElement>(null)
  const [width] = useWindowSize()

  useEffect(() => {
    const setFromEvent = (event: any) => {
      setPosition({ x: event.clientX })
    }

    const circle = circleRef.current

    if (circle && width > 1024) {
      circle.addEventListener('mousemove', setFromEvent)
    }

    return () => {
      if (circle && width > 1024) {
        circle.removeEventListener('mousemove', setFromEvent)
      }
    }
  }, [width])

  const circleStyle = {
    left: position.x === 0 ? '50%' : position.x,
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
              Точно
              <span className={`${styles.qualityText} mx color-white`}>в</span>
              срок
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
