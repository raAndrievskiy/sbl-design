import React from 'react'
import { Link } from 'react-router-dom'

import { ArrowsIcon } from '../../../../assets/icons'
import { LineWhite } from '../../../LineWhite/LineWhite'

import styles from './styles.module.scss'

export const Contacts: React.FC = () => {
  return (
    <>
      <LineWhite />
      <div className={styles.footerMail}>
        <ArrowsIcon className={styles.arrowIcon} />
        <Link
          to="#"
          className={styles.mail}
          onClick={e => {
            window.location.href = 'mailto:info@sbl-design.ru'
            e.preventDefault()
          }}>
          info@sbl-design.ru
        </Link>
      </div>
      <LineWhite />
      <div className={styles.phone}>
        <a
          href="tel:+74951509091"
          className={`${styles.phoneLink} color-white`}>
          8 (495) 150-90-91
        </a>
      </div>
      <LineWhite />
      <span className={`${styles.copyright} color-white`}>© 2023</span>
    </>
  )
}
