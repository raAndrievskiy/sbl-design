import React, { useEffect, useState } from 'react'
import { SplitChars, Timeline, Tween } from 'react-gsap'
import { setLoader } from '../../store/appSlice'

import styles from './styles.module.scss'

export const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.charsWrap}>
        <Timeline
          target={
            <SplitChars wrapper={<div className={styles.preloaderText} />}>
              SBL Design
            </SplitChars>
          }>
          <Tween to={{ opacity: 1 }} stagger={0.1} />
          <Tween
            // target={2}
            to={{
              opacity: 0,
            }}
            stagger={0.1}
          />
        </Timeline>
      </div>
    </div>
  )
}
