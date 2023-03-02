import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../assets/icons'
import { Container } from '../'
import styles from './styles.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <NavLink to="/" className={styles.logo}>
            <Logo width={120} height={23} />
          </NavLink>
          <div className={styles.headerLink}>
            <div className={styles.linkWrap}>
              <NavLink to="/" className={`${styles.link} color-white`}>
                Premium
              </NavLink>
              <NavLink to="/" className={`${styles.link} color-white`}>
                Special
              </NavLink>
            </div>
            <div className={styles.linkWrap}>
              <NavLink to="/" className={`${styles.link} color-white`}>
                О компании
              </NavLink>
              <NavLink to="/" className={`${styles.link} color-white`}>
                Контакты
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
