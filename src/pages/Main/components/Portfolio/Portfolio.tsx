import React, { useEffect } from 'react'
import gsap from 'gsap'
import { CircleIcon } from '../../../../assets/icons'
import { Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'

import styles from './styles.module.scss'

export const Portfolio: React.FC = () => {
  const portfolioImagesRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const portfolio = portfolioImagesRef.current
    let rect = portfolio?.getBoundingClientRect()
    let mouse = { x: 0, y: 0, moved: false }

    if (!portfolio) return

    const handleMouseMove = (event: any) => {
      mouse.moved = true
      mouse.x = event.clientX - (rect?.x || 0)
      const tl = gsap.timeline()

      function parallaxIt(target: any, movement: any) {
        tl.to(target, {
          duration: 0.5,
          x:
            ((mouse.x - (rect?.width || 0) / 2) / (rect?.width || 0)) *
            movement,
          y:
            ((mouse.y - (rect?.height || 0) / 2) / (rect?.height || 0)) *
            movement,
        })
      }

      const mouseMoved = () => {
        if (mouse.moved) {
          parallaxIt('.test', -30)
        }
        mouse.moved = false
      }

      gsap.ticker.add(mouseMoved)
    }

    portfolio.addEventListener('mousemove', handleMouseMove)

    return () => {
      portfolio.removeEventListener('mousemove', handleMouseMove)
    }
  }, [portfolioImagesRef])

  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
      <span className={styles.portfolioDescription}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные идеи
        ты входишь в них с головой и со всем вниманием к процессу не ожидая
        ничего взамен.
      </span>
      <div className={styles.portfolioImages} ref={portfolioImagesRef}>
        <CircleIcon className={styles.circleIcon} />
        {portfolioImagesData.map(images => (
          <img
            className={`${styles['portfolioImage' + images.id]} test`}
            src={images.src}
            alt=""
            key={images.id}
          />
        ))}
      </div>
    </div>
  )
}
