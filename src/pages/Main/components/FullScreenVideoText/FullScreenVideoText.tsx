import React from 'react'
import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Line } from '../../../../components'
import { fullScreenVideoTextMock } from './fullScreenVideoTextMock'
import { FullScreenVideoTextTypes } from './fullScreenVideoTextTypes'
import video from '../../../../assets/video/lines.mp4'
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
                  start: '0px 0px',
                  end: '70% 50%',
                  scrub: 2,
                },
              }}>
              <p className={styles.text}>{item.text}</p>
            </Tween>
            <Line />
          </div>
        ))}
      </div>
    </div>
  )
}
