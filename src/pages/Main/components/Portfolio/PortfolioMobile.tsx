import React from 'react'
import { Container, Title } from '../../../../components'
import { portfolioImagesData } from './portfolioImagesData'
import styles from './styles.module.scss'

export const PortfolioMobile: React.FC = () => {
  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
      <Container>
        <span className={styles.portfolioDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
          идеи ты входишь в них с головой и со всем вниманием к процессу не
          ожидая ничего взамен.
        </span>
        <div className={styles.portfolioImages}>
          {portfolioImagesData.map((images, index) => (
            <img
              className={styles.portfolioImgMob}
              src={images.src}
              alt=""
              key={images.id}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
