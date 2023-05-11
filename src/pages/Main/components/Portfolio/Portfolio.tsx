import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { CircleIcon } from '../../../../assets/icons'
import { Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'

import styles from './styles.module.scss'

export const Portfolio: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [circle, setCircle] = useState({ x: 0, y: 0 })
  const portfolioRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLImageElement | null>>([])
  const circleRef = useRef(null)

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

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        x: index => {
          return -(circle.x / 50)
        },
        y: (index, target) => {
          return -(circle.y / 50)
        },
        ease: 'power2.out',
      })
    }
  }, [position, circle])

  useLayoutEffect(() => {
    const portfolio = portfolioRef.current

    const setFromEvent = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setCircle({ x: event.clientX, y: event.clientY })
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

  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
      <span className={styles.portfolioDescription}>
        Мы проектируем, строим шахты <br /> и устанавливаем оборудование <br />{' '}
        в административные и производственные здания, жилые комплексы и
        больницы, торговые центры и аэропорты, <br /> в зависимости от типа и
        назначения здания подбираем наиболее эффективное индивидуальное решение.
      </span>
      <div className={styles.portfolioImages} ref={portfolioRef}>
        <CircleIcon
          className={`${styles.circleIcon} circleIcon`}
          ref={circleRef}
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
