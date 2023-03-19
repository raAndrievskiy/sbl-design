import React from 'react'
import gsap from 'gsap'
import { Timeline, Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type TitleProps = {
  children: string
}

export const Title: React.FC<TitleProps> = ({ children }) => {
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
            start: 'top-=230% 10%',
            end: 'bottom-=100% bottom',
            scrub: 0.3,
          },
        }}
      />
      <Tween
        target={1}
        to={{
          xPercent: -40,
          scrollTrigger: {
            trigger: '.title',
            start: 'top-=130% 10%',
            end: 'bottom bottom',
            scrub: 0.3,
            markers: true,
          },
        }}
      />
    </Timeline>
  )
}
