import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from '../../../../components'
import { AboutTitle, ImageGallery, Subtitle } from './components'

import historyImg01 from '../../../../assets/images/about/historyImg01.png'
import historyImg02 from '../../../../assets/images/about/historyImg02.png'
import historyImg03 from '../../../../assets/images/about/historyImg03.png'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const History: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <div className={`${styles.history} historyTrigger`}>
      {width > 1024 ? (
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
              <div className={styles.imgBlock}>
                <ImageGallery />
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className={styles.historyWrap}>
          <AboutTitle children="Начало" />
          <div className={styles.historyImgWrap}>
            <span className={styles.subtitle}>
              Разрабатывая подобные идеи ты входишь в них с головой и со всем
              вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные. Разрабатывая подобные идеи ты входишь в них с головой и
              со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая
              подобные.
            </span>
            <div className={styles.imgBlock}>
              <div className={styles.imgBlockWrap}>
                <img src={historyImg01} alt="" />
                <span>
                  Разрабатывая подобные идеи ты входишь в них с головой и со
                  всем вниманием к процессу не ожидая ничего взамен.
                </span>
              </div>
              <div className={styles.imgBlockWrap}>
                <img src={historyImg02} alt="" />
                <span>
                  Разрабатывая подобные идеи ты входишь в них с головой и со
                  всем вниманием к процессу не ожидая ничего взамен.
                </span>
              </div>
              <div className={styles.imgBlockWrap}>
                <img src={historyImg03} alt="" />
                <span>
                  Разрабатывая подобные идеи ты входишь в них с головой и со
                  всем вниманием к процессу не ожидая ничего взамен.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
