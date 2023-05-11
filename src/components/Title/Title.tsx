import React from 'react'
import gsap from 'gsap'
import { Timeline, Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useWindowSize from '../../hook/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

type TitleProps = {
  children: string
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  const [width] = useWindowSize()

  return (
    <Timeline target={<h1 className="title">{children}</h1>}>
      <Tween
        target={0}
        from={{
          yPercent: 80,
        }}
        to={{
          yPercent: 0,
          scrollTrigger: {
            trigger: '.title',
            start: width > 1024 ? 'top-=230% center' : 'top-=750vh center',
            end: 'bottom-=100% center',
            scrub: 0.3,
          },
        }}
      />
      <Tween
        target={1}
        to={{
          xPercent: -20,
          scrollTrigger: {
            trigger: '.title',
            start: 'top-=120% 10%',
            end: 'bottom+=90% bottom',
            scrub: 0.3,
          },
        }}
      />
    </Timeline>
  )
}
