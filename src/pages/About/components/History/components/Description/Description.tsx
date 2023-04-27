import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Description: React.FC = () => {
  const textWrapRef = useRef<HTMLDivElement>(null)
  const textRef1 = useRef<HTMLSpanElement>(null)
  const textRef2 = useRef<HTMLSpanElement>(null)
  const textRef3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const textWrap = textWrapRef.current
    const text1 = textRef1.current
    const text2 = textRef2.current
    const text3 = textRef3.current

    const tlText1 = gsap.timeline({
      scrollTrigger: {
        trigger: text1,
        start: 'bottom+=300vh center',
        end: 'bottom+=300vh center',
        // markers: true,
      },
    })

    tlText1.fromTo(
      text1,
      {
        top: 0,
        opacity: 1,
      },
      {
        position: 'fixed',
        top: '-40px',
        opacity: 0,
      },
    )

    gsap.to(text1, {
      position: 'fixed',
      scrollTrigger: {
        trigger: textWrap,
        start: 'top-=350vh top',
        end: 'bottom center',
        scrub: true,
        markers: true,
      },
      onComplete: () => {
        // text1.style.position = 'absolute'
        // subtitle.style.left = '0px'
      },
    })

    // const tlText2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.elevatorTrigger2',
    //     start: 'top-=50v center-=50vh',
    //     end: 'bottom center',
    //     scrub: 0.5,
    //   },
    // })
    // const tlText3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.elevatorTrigger3',
    //     start: 'top center-=50vh',
    //     end: 'bottom center',
    //     // end: 'bottom-=10vh center',
    //     scrub: 0.5,
    //     // markers: true,
    //   },
    // })

    // tlText2.fromTo(
    //   textRef2.current,
    //   { opacity: 0, y: 0 },
    //   { opacity: 1, y: -250 },
    // )
    // tlText2.to(textRef2.current, { opacity: 0, y: -350 }, '+=1')

    // tlText3.fromTo(
    //   textRef3.current,
    //   { opacity: 0, y: 0 },
    //   { opacity: 1, y: -470 },
    // )

    // return () => {
    //   tlText1.kill()
    // tlText2.kill()
    // tlText3.kill()
    // }
  }, [])

  return (
    <div className={styles.imgDescriptionWrap} ref={textWrapRef}>
      <span className={styles.imgDescription} ref={textRef1}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
        Разрабатывая подобные идеи.
      </span>

      {/* <span className={styles.imgDescription} ref={textRef2}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
        Разрабатывая подобные идеи.
      </span>

      <span className={styles.imgDescription} ref={textRef3}>
        Разрабатывая подобные идеи ты входишь в них с головой и со всем
        вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
        Разрабатывая подобные идеи.
      </span> */}
    </div>
  )
}
