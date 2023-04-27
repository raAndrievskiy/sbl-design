import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from '../../../../components'
import { AboutTitle, Description, Images, Subtitle } from './components'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const History: React.FC = () => {
  // const historyRef = useRef<HTMLDivElement>(null)
  // const historyImgWrapRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const history = historyRef.current
  //   const historyImgWrap = historyImgWrapRef.current

  //   if (history && historyImgWrap) {
  //     gsap.to(historyImgWrap, {
  //       position: 'fixed',
  //       scrollTrigger: {
  //         trigger: history,
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: true,
  //         markers: true,
  //       },
  //       onComplete: () => {
  //         // history.style.position = 'absolute'
  //       },
  //     })
  //   }
  // }, [])

  return (
    // <div className={`${styles.history} historyTrigger`} ref={historyRef}>
    <div className={`${styles.history} historyTrigger`}>
      <Container>
        <div className={styles.historyWrap}>
          <AboutTitle children="Начало" />
          <div className={styles.historyImgWrap}>
            <Subtitle
              children="Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
            Разрабатывая подобные идеи ты входишь в них с головой и со всем
            вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные."
            />
            {/* <div className={styles.imgWrap}> */}
            <div className={styles.imgBlock}>
              <Images />
              <Description />
            </div>
            {/* </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}
