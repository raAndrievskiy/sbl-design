import React from 'react'
import { SplitChars, Timeline, Tween } from 'react-gsap'
import { useAppSelector } from '../../hook/app'

import styles from './styles.module.scss'

export const Preloader: React.FC = () => {
  const loader = useAppSelector(state => state.app.loader)

  return (
    <div
      className={styles.preloader}
      style={loader ? { display: 'block' } : { display: 'none' }}>
      <div className={styles.charsWrap}>
        <Timeline
          target={
            <SplitChars wrapper={<div className={styles.preloaderText} />}>
              SBL Design
            </SplitChars>
          }>
          <Tween from={{ opacity: 0 }} duration={0.5} />
          <Tween to={{ opacity: 1 }} duration={1.5} stagger={0.1} />
          <Tween
            to={{
              opacity: 0,
            }}
            duration={1.5}
            stagger={0.1}
          />
        </Timeline>
      </div>
    </div>
  )
}
