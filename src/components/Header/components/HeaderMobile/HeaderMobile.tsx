import React from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../../../assets/icons'
import { Container } from '../../../'
import styles from './styles.module.scss'

export const HeaderMobile: React.FC = () => {
  return (
    <header className={styles.headerWrap}>
      <Container>
        <div className={styles.header}>
          <NavLink to="/" className={styles.logo}>
            <Logo width={120} height={23} />
          </NavLink>
          <div className={styles.burgerWrap}>
            <div className={styles.burger} />
            {/* <NavLink to="/" className={`${styles.link} color-white`}>
              Premium
            </NavLink>
            <NavLink to="/" className={`${styles.link} color-white`}>
              Special
            </NavLink>
            <NavLink to="/" className={`${styles.link} color-white`}>
              О компании
            </NavLink>
            <NavLink to="/" className={`${styles.link} color-white`}>
              Контакты
            </NavLink> */}
          </div>
        </div>
      </Container>
    </header>
  )
}
