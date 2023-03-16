import React from 'react'
import { Link } from 'react-router-dom'

import { ArrowsIcon } from '../../../../assets/icons'
import { LineWhite } from '../../../LineWhite/LineWhite'

import styles from './styles.module.scss'

export const Mail: React.FC = () => {
  return (
    <>
      <LineWhite />
      <div className={styles.footerMail}>
        <ArrowsIcon width={556} height={76} />
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
    </>
  )
}
