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
          Мы проектируем, строим шахты и устанавливаем оборудование в
          административные и производственные здания, жилые комплексы и
          больницы, торговые центры и аэропорты, в зависимости от типа и
          назначения здания подбираем наиболее эффективное индивидуальное
          решение.
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
