import React from 'react'
import { Title } from '../../../../components'

import styles from './styles.module.scss'

export const Portfolio: React.FC = () => {
  return (
    <div className={`${styles.portfolio} portfolio`}>
      <Title children="Проекты" />
    </div>
  )
}
