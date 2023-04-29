import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Logo } from '../../../../assets/icons'
import { Container } from '../../..'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

export const HeaderDesktop: React.FC = () => {
  const [width] = useWindowSize()

  const location = useLocation()

  const scrollToContacts = () => {
    if (location.pathname === '/') {
      document.querySelector('#contacts')?.scrollIntoView({
        behavior: 'smooth',
      })
    } else {
      setTimeout(() => {
        document.querySelector('#contacts')?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 0)
      location.pathname = '/'
    }
  }

  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <NavLink to="/" className={styles.logo}>
            <Logo width={width > 1440 ? 120 : 102} height={23} />
          </NavLink>
          <div className={styles.headerLink}>
            <div className={styles.linkWrap}>
              <NavLink to="/premium" className={`${styles.link} color-white`}>
                Premium
              </NavLink>
              <NavLink to="/special" className={`${styles.link} color-white`}>
                Special
              </NavLink>
            </div>
            <div className={styles.linkWrap}>
              <NavLink to="/about" className={`${styles.link} color-white`}>
                О компании
              </NavLink>
              <NavLink
                to="/"
                className={`${styles.link} color-white`}
                onClick={scrollToContacts}>
                Контакты
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
