import React from 'react'

import { Container } from '../../../../components'
import { StylishIcon, UniquelyIcon, BestIcon } from '../../../../assets/icons'
import styles from './styles.module.scss'

export const Icons: React.FC = () => {
  return (
    <div className={styles.premiumIcons}>
      <Container>
        <StylishIcon />
        <UniquelyIcon />
        <BestIcon />
      </Container>
    </div>
  )
}
