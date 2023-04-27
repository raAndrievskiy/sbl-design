import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import mockImg from '../../../../../../assets/images/mockImg.png'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Images: React.FC = () => {
  const imageRef1 = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       // trigger: '.historyTrigger',
  //       trigger: imageRef1.current,
  //       start: 'top-=340vh top',
  //       end: 'bottom-=900vh bottom',
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })

  //   tl.fromTo(imageRef1.current, { y: 0 }, { y: '-75%' })

  //   return () => {
  //     tl.kill()
  //     if (tl.scrollTrigger) {
  //       tl.scrollTrigger.kill()
  //     }
  //   }
  // }, [])

  return (
    <div
      ref={imageRef1}
      className="imageTrigger"
      style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        className={`${styles.elevator} elevatorTrigger1`}
        src={mockImg}
        alt=""
      />
      <img
        className={`${styles.elevator} elevatorTrigger`}
        src={mockImg}
        alt=""
      />
      <img
        className={`${styles.elevator} elevatorTrigger`}
        src={mockImg}
        alt=""
      />
    </div>
  )
}
