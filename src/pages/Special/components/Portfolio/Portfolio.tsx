import React from 'react'
import { Container } from '../../../../components'

import previewElevator01 from '../../../../assets/images/special/portfolio/preview-elevator-01.png'
import previewElevator02 from '../../../../assets/images/special/portfolio/preview-elevator-02.png'
import { portfolioImagesData } from './portfolioImagesData'
import styles from './styles.module.scss'

export const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <Container>
        <div className={styles.portfolioText}>
          <h3 className="specialTitle color-white">
            Умеем встроить лифт в любое пространство
          </h3>
          <span className={`color-white ${styles.portfolioDescription}`}>
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
            идеи ты входишь в них с головой и со всем вниманием к процессу не
            ожидая ничего взамен.
          </span>
          <img src={previewElevator01} className={styles.previewImg1} alt="" />
          <img src={previewElevator02} className={styles.previewImg2} alt="" />
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
