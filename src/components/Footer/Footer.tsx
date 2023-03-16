import React from 'react'

import { Container } from '../Container/Container'
import styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrap}>
      <Container>
        <div className={styles.footer}></div>
      </Container>
    </footer>
  )
}
