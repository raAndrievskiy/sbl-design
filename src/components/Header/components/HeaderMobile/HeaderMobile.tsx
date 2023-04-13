import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../../../assets/icons'
import { Container } from '../../../'
import styles from './styles.module.scss'

export const HeaderMobile: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false)

  const openBurger = () => setShowBurger(!showBurger)

  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <div className={styles.logoWrap}>
            <NavLink
              to="/"
              className={styles.logo}
              onClick={() => setShowBurger(false)}>
              <Logo width={120} height={23} />
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
      {showBurger ? (
        <div className={styles.burgerWrap}>
          <NavLink
            to="/premium"
            className={`${styles.link} color-white`}
            onClick={() => setShowBurger(false)}>
            Premium
          </NavLink>
          <NavLink
            to="/special"
            className={`${styles.link} color-white`}
            onClick={() => setShowBurger(false)}>
            Special
          </NavLink>
          <NavLink
            to="/about"
            className={`${styles.link} color-white`}
            onClick={() => setShowBurger(false)}>
            О компании
          </NavLink>
          <NavLink
            to="/"
            className={`${styles.link} color-white`}
            onClick={() => setShowBurger(false)}>
            Контакты
          </NavLink>
        </div>
      ) : null}
    </header>
  )
}
