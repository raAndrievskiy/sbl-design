import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from '../../../../components'
import { AboutTitle, ImageGallery, Subtitle } from './components'
import styles from './styles.module.scss'

import historyImg01 from '../../../../assets/images/about/historyImg01.png'
import historyImg02 from '../../../../assets/images/about/historyImg02.png'
import historyImg03 from '../../../../assets/images/about/historyImg03.png'
import useWindowSize from '../../../../hook/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

const images = [historyImg01, historyImg02, historyImg03]

const texts = [
  'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
  'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
  'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
]

export const History: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <div className={`${styles.history} historyTrigger`}>
      <Container>
        {width > 1024 ? (
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
                <ImageGallery images={images} descriptions={texts} />
              </div>
            </div>
          </div>
        ) : (
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
                <ImageGallery images={images} descriptions={texts} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
