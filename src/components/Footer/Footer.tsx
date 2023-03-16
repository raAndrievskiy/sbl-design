import React from 'react'

import { Container } from '../Container/Container'
import { Info, Contacts } from './components/'
import styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Info />
        <Contacts />
      </Container>
    </footer>
  )
}
