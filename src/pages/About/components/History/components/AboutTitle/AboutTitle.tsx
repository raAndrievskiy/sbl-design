import React from 'react'
import gsap from 'gsap'
import { Timeline, Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useWindowSize from '../../../../../../hook/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

type TitleProps = {
  children: string
}

export const AboutTitle: React.FC<TitleProps> = ({ children }) => {
  const [width] = useWindowSize()

  return (
    <Timeline target={<h1 className="title aboutTitle">{children}</h1>}>
      <Tween
        target={0}
        from={{
          yPercent: 80,
          xPercent: 90,
        }}
        to={{
          yPercent: 0,
          scrollTrigger: {
            trigger: '.title',
            start: width > 1024 ? 'top-=780vh 10%' : 'top-=350% 10%',
            end: 'bottom-=300vh bottom',
            scrub: 0.3,
          },
        }}
      />
      <Tween
        target={1}
        to={{
          xPercent: 0,
          scrollTrigger: {
            trigger: '.historyTrigger',
            start: 'top-=500vh top',
            endTrigger: '.aboutTitle',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}
      />
    </Timeline>
  )
}
