import React from 'react'

import { Container } from '../Container/Container'
import { Info, Mail, Phone } from './components/'
import styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Info />
        <Mail />
        <Phone />
      </Container>
    </footer>
  )
}
