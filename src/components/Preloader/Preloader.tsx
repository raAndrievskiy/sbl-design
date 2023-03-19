import React, { useEffect, useState } from 'react'
import { SplitChars, Timeline, Tween } from 'react-gsap'
import { setLoader } from '../../store/appSlice'

import styles from './styles.module.scss'

export const Preloader: React.FC = ({ isLoader }: any) => {
  // useEffect(() => {
  //   setTimeout(() => setLoader(false), 3000)
  //   if (isLoader) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'visible'
  //   }
  // })

  return (
    <div className={styles.preloader}>
      <div className={styles.charsWrap}>
        <Timeline
          target={
            <SplitChars wrapper={<div className={styles.preloaderText} />}>
              SBL Design
            </SplitChars>
          }>
          <Tween from={{ opacity: 0 }} duration={0.5} />
          <Tween to={{ opacity: 1 }} duration={2} stagger={0.1} />
          <Tween
            to={{
              opacity: 0,
            }}
            duration={2}
            stagger={0.1}
          />
        </Timeline>
      </div>
    </div>
  )
}
