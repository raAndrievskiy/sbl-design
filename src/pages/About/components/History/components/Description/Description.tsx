import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Description: React.FC = () => {
  const textContainer = useRef<HTMLDivElement>(null)
  const textRef1 = useRef<HTMLDivElement>(null)
  const textRef2 = useRef<HTMLDivElement>(null)
  const textRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tlText1 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top center-=50vh',
        end: 'bottom-=50vh center',
        scrub: 0.5,
      },
    })
    const tlText2 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef2.current,
        start: 'top-=50v center-=50vh',
        end: 'bottom center',
        scrub: 0.5,
      },
    })
    const tlText3 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef3.current,
        start: 'top center-=50vh',
        end: 'bottom center',
        // end: 'bottom-=10vh center',
        scrub: 0.5,
        // markers: true,
      },
    })

    tlText1.fromTo(textRef1.current, { y: 0 }, { y: 0 })
    tlText1.to(textRef1.current, { opacity: 0, y: -100 }, '+=1')

    tlText2.fromTo(
      textRef2.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: -250 },
    )
    tlText2.to(textRef2.current, { opacity: 0, y: -350 }, '+=1')

    tlText3.fromTo(
      textRef3.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: -470 },
    )

    return () => {
      tlText1.kill()
      tlText2.kill()
      tlText3.kill()
    }
  }, [])

  return (
    <div className="text-blocks-container" ref={textContainer}>
      <div className="text-block" ref={textRef1}>
        <p className={styles.imgDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
          Разрабатывая подобные идеи.
        </p>
      </div>
      <div className="text-block" ref={textRef2}>
        <p className={styles.imgDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
          Разрабатывая подобные идеи.
        </p>
      </div>
      <div className="text-block" ref={textRef3}>
        <p className={styles.imgDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные.
          Разрабатывая подобные идеи.
        </p>
      </div>
    </div>
  )
}
