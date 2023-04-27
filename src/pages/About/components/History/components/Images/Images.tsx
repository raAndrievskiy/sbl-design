import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import historyImg01 from '../../../../../../assets/images/about/historyImg01.png'
import historyImg02 from '../../../../../../assets/images/about/historyImg02.png'
import historyImg03 from '../../../../../../assets/images/about/historyImg03.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Images: React.FC = () => {
  return (
    <div className={styles.elevatorWrap}>
      <img className={styles.elevator} src={historyImg01} alt="" />
      <img
        className={`${styles.elevator} elevatorTrigger`}
        src={historyImg02}
        alt=""
      />
      <img
        className={`${styles.elevator} elevatorTrigger`}
        src={historyImg03}
        alt=""
      />
    </div>
  )
}
