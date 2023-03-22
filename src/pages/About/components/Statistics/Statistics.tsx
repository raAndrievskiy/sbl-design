import React from 'react'
import { Container } from '../../../../components'

import { textData } from './textData'
import styles from './styles.module.scss'

export const Statistics: React.FC = () => {
  return (
    <div className={styles.statistics}>
      <Container>
        <div className={styles.statisticsBlockWrap}>
          {textData.map(text => (
            <div key={text.id} className={styles.statisticsBlock}>
              <span className={`color-white ${styles.blockTitle}`}>
                {text.title}
              </span>
              <span className={`color-white ${styles.blockDescription}`}>
                {text.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
