import React from 'react'
// import { TweenMax, gsap } from 'gsap'
import { CircleIcon } from '../../../../assets/icons'
import { Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'

import styles from './styles.module.scss'

// gsap.registerPlugin(TweenMax)

// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
// const mouse = { x: pos.x, y: pos.y }
// console.log('mouse: ', mouse)

// const parallaxIt = (target: any, movement: any) => {
//   TweenMax.to(target, 0.5, {
//     x: ((mouse.x - rect.width / 2) / React?.width) * movement,
//     y: ((mouse.y - rect.height / 2) / rect?.height) * movement,
//   })
// }
// parallaxIt()

export const Portfolio: React.FC = () => {
  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
      <span className={styles.portfolioDescription}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные идеи
        ты входишь в них с головой и со всем вниманием к процессу не ожидая
        ничего взамен.
      </span>
      <div className={styles.portfolioImages}>
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
