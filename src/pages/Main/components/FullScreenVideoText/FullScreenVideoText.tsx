import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Line } from '../../../../components'
import video from '../../../../assets/video/lines.mp4'
import { fullScreenVideoTextMock } from './fullScreenVideoTextMock'
import { FullScreenVideoTextTypes } from './fullScreenVideoTextTypes'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const FullScreenVideoText: React.FC = () => {
  return (
    <div className={styles.main}>
      <video loop autoPlay muted className={styles.video}>
        <source src={video} type={'video/mp4'} />
      </video>
      <div className={styles.textWrap}>
        {fullScreenVideoTextMock.map((item: FullScreenVideoTextTypes) => (
          <div
            key={item.id}
            className={`${item.className} ${styles.textBlock}`}>
            <Tween
              to={{
                x: item.x,
                scrollTrigger: {
                  // trigger: `${styles.main}`,
                  start: '0px 0px',
                  end: '70% 50%',
                  scrub: 0.5,
                  // markers: true,
                },
              }}>
              <p className={styles.text}>{item.text}</p>
            </Tween>
            <Line />
          </div>
        ))}

        {/* <Tween
          to={{
            x: '10%',
            scrollTrigger: {
              trigger: `${styles.main}`,
              start: '0px 0px',
              end: '70% 50%',
              scrub: 0.5,
              // markers: true,
            },
          }}>
          <p className={styles.text}>— уникальная атмосфера</p>
        </Tween>
        <Line />
        <Tween
          to={{
            x: '-20%',
            scrollTrigger: {
              trigger: `${styles.main}`,
              start: '0px 0px',
              end: '70% 50%',
              scrub: 0.5,
              // markers: true,
            },
          }}>
          <p className={styles.text}>и комфорт, путем</p>
        </Tween>
        <Line />
        <Tween
          to={{
            x: '20%',
            scrollTrigger: {
              trigger: `${styles.main}`,
              start: '0px 0px',
              end: '70% 50%',
              scrub: 0.5,
              // markers: true,
            },
          }}>
          <p className={styles.text}>индивидуальных</p>
        </Tween>
        <Line />
        <Tween
          to={{
            x: '10%',
            scrollTrigger: {
              trigger: `${styles.main}`,
              start: '0px 0px',
              end: '70% 50%',
              scrub: 0.5,
              // markers: true,
            },
          }}>
          <p className={styles.text}>решений</p>
        </Tween>
        <Line /> */}
      </div>
    </div>
  )
}
