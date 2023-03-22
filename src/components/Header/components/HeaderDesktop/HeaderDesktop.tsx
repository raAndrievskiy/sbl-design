import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../../../assets/icons'
import { Container } from '../../..'
import styles from './styles.module.scss'

export const HeaderDesktop: React.FC = () => {
  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <div className={styles.logoWrap}>
            <NavLink to="/" className={styles.logo}>
              <Logo width={120} height={23} />
            </NavLink>
          </div>
          <div className={styles.headerLink}>
            <div className={styles.linkWrap}>
              <NavLink to="/preloader" className={`${styles.link} color-white`}>
                Premium
              </NavLink>
              <NavLink to="/" className={`${styles.link} color-white`}>
                Special
              </NavLink>
            </div>
            <div className={styles.linkWrap}>
              <NavLink to="/about" className={`${styles.link} color-white`}>
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
