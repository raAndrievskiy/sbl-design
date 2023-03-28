import React from 'react'

import { Container } from '../../../../components'
import styles from './styles.module.scss'

export const ImageBackground: React.FC = () => {
  return (
    <div className={styles.special}>
      <div className={styles.spacialMain}>
        <span className={`${styles.spacialMainText} color-white`}>
          SBL DESIGN – Special
        </span>
      </div>
      <Container>
        <></>
      </Container>
    </div>
  )
}
