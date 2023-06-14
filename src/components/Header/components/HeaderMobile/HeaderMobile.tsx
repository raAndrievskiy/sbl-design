import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Logo } from '../../../../assets/icons'
import { Container } from '../../../'
import styles from './styles.module.scss'

export const HeaderMobile: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false)
  const location = useLocation()

  const openBurger = () => setShowBurger(!showBurger)

  if (showBurger) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  const scrollToContacts = () => {
    if (location.pathname === '/') {
      setShowBurger(false)
      document.querySelector('#contacts')?.scrollIntoView({
        behavior: 'smooth',
      })
    } else {
      setShowBurger(false)
      location.pathname = '/'
      setTimeout(() => {
        document.querySelector('#contacts')?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 100)
    }
  }

  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <div className={styles.logoWrap}>
            <NavLink
              to="/"
              className={styles.logo}
              onClick={() => setShowBurger(false)}>
              <Logo width={102} height={24} />
            </NavLink>
          </div>
          <div
            className={`${styles.burger} ${
              showBurger ? styles.burgerOpen : ''
            }`}
            onClick={openBurger}
          />
        </div>
      </Container>
      {/* {showBurger ? ( */}
      <div className={showBurger ? styles.burgerWrap : styles.burgerWrapClose}>
        <NavLink
          to="/premium"
          className={styles.link}
          onClick={() => setShowBurger(false)}>
          Premium
        </NavLink>
        <NavLink
          to="/special"
          className={styles.link}
          onClick={() => setShowBurger(false)}>
          Special
        </NavLink>
        <NavLink
          to="/about"
          className={styles.link}
          onClick={() => setShowBurger(false)}>
          О компании
        </NavLink>
        <NavLink to="/" className={styles.link} onClick={scrollToContacts}>
          Контакты
        </NavLink>
      </div>
      {/* ) : null} */}
    </header>
  )
}
