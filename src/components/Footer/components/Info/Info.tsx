import React from 'react'
import { NavLink } from 'react-router-dom'

import { locationData, navLinkData } from './footer.data'
import styles from './styles.module.scss'

export const Info: React.FC = () => {
  return (
    <div className={styles.footerInfo}>
      <div className={styles.locations}>
        {locationData.map(location => (
          <div className={styles.location} key={location.id}>
            <span className={`${styles.locationLabel} color-grey`}>
              {location.label}
            </span>
            <span className={`${styles.locationAddress} color-white`}>
              {location.address}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.navLink}>
        {navLinkData.map(link => (
          <NavLink
            to={link.to}
            className={`${styles.link} color-white`}
            key={link.id}>
            {link.navLink}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
