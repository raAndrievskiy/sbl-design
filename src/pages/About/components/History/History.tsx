import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { Container } from '../../../../components'
import { AboutTitle, Description, Images, Subtitle } from './components'
import styles from './styles.module.scss'

export const History: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        // markers: true,
      },
    })

    return () => {
      tl.kill()
    }
  }, [])
  return (
    <div className={`${styles.history} historyTrigger`} ref={ref}>
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
