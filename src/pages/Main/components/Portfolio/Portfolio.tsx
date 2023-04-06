import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { CircleIcon } from '../../../../assets/icons'
import { Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'

import styles from './styles.module.scss'

export const Portfolio: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const portfolioRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLImageElement | null>>([])

  useEffect(() => {
    gsap.to(itemRefs.current, {
      x: (index, target) => {
        const item = portfolioImagesData[index]
        return (position.x / 50) * item.x
      },
      y: (index, target) => {
        const item = portfolioImagesData[index]
        return (position.y / 50) * item.y
      },
      ease: 'power2.out',
    })
  }, [position])

  useLayoutEffect(() => {
    const portfolio = portfolioRef.current

    const setFromEvent = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    if (portfolio) {
      portfolio.addEventListener('mousemove', setFromEvent)
    }

    return () => {
      if (portfolio) {
        portfolio.removeEventListener('mousemove', setFromEvent)
      }
    }
  }, [])

  const circleStyle = {
    left: position.x,
    top: position.y,
  }

  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
      <span className={styles.portfolioDescription}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные идеи
        ты входишь в них с головой и со всем вниманием к процессу не ожидая
        ничего взамен.
      </span>
      <div className={styles.portfolioImages} ref={portfolioRef}>
        <CircleIcon
          className={`${styles.circleIcon} circleIcon`}
          // style={circleStyle}
        />
        {portfolioImagesData.map((images, index) => (
          <img
            className={`${images.className} ${
              styles['portfolioImage' + images.id]
            }`}
            src={images.src}
            ref={ref => (itemRefs.current[index] = ref)}
            alt=""
            key={images.id}
          />
        ))}
      </div>
    </div>
  )
}
