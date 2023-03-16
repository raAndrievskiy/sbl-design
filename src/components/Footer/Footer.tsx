import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from '../Container/Container'
import { locationData, navLinkData } from './footer.data'
import styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInfo}>
          <div className={styles.locations}>
            {locationData.map(location => (
              <div key={location.id}>
                <span className={styles.locationLabel}>{location.label}</span>
                <span className={styles.locationAddress}>
                  {location.address}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.navLink}>
            <NavLink to="/" className={styles.дlink}>
              Premium
            </NavLink>
            <NavLink to="/" className={styles.дlink}>
              Special
            </NavLink>
            <NavLink to="/" className={styles.дlink}>
              О компании
            </NavLink>
            <NavLink to="/" className={styles.дlink}>
              Контакты
            </NavLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}
