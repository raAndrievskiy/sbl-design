import React, { MouseEvent, useEffect, useRef } from 'react'
import gsap, { TimelineLite, TweenMax } from 'gsap'
// import { TweenMax, gsap } from 'gsap'
import { CircleIcon } from '../../../../assets/icons'
import { Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'

import styles from './styles.module.scss'

// var rect = $('#container')[0].getBoundingClientRect()
// var mouse = { x: 0, y: 0, moved: false }

// $('#container').mousemove(function (e) {
//   mouse.moved = true
//   mouse.x = e.clientX - rect.left
//   mouse.y = e.clientY - rect.top
// })

// // Ticker event will be called on every frame
// TweenLite.ticker.addEventListener('tick', function () {
//   if (mouse.moved) {
//     parallaxIt('.slide', -100)
//     parallaxIt('img', -30)
//   }
//   mouse.moved = false
// })

// function parallaxIt(target, movement) {
//   TweenMax.to(target, 0.5, {
//     x: ((mouse.x - rect.width / 2) / rect.width) * movement,
//     y: ((mouse.y - rect.height / 2) / rect.height) * movement,
//   })
// }

// $(window).on('resize scroll', function () {
//   rect = $('#container')[0].getBoundingClientRect()
// })

export const Portfolio: React.FC = () => {
  const portfolioImagesRef = React.useRef<HTMLDivElement>(null)
  const imageRef = React.useRef<HTMLImageElement>(null)

  useEffect(() => {
    const portfolio = portfolioImagesRef.current
    let rect = portfolio?.getBoundingClientRect()
    console.log('rect: ', rect)
    let mouse = { x: 0, y: 0, moved: false }

    if (!portfolio) return

    const handleMouseMove = (event: any) => {
      mouse.moved = true
      mouse.x = event.clientX - (rect?.x || 0)
      const tl = new TimelineLite()
      console.log('tl: ', tl)

      function parallaxIt(target: any, movement: any) {
        TweenMax.to(target, 0.5, {
          x:
            ((mouse.x - (rect?.width || 0) / 2) / (rect?.width || 0)) *
            movement,
          y:
            ((mouse.y - (rect?.height || 0) / 2) / (rect?.height || 0)) *
            movement,
        })
      }

      tl.ticker.add(() => {
        if (mouse.moved) {
          // parallaxIt('.slide', -100)
          parallaxIt('img', -30)
        }
        mouse.moved = false
      })
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
            className={`${styles['portfolioImage' + images.id]}`}
            src={images.src}
            alt=""
            key={images.id}
          />
        ))}
      </div>
    </div>
  )
}
