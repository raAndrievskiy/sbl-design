import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CharacteristicsCircleIconProps } from './types'

gsap.registerPlugin(ScrollTrigger)

export const CharacteristicsCircleIcon = ({
  className,
  svgDrawTo,
  startTrigger,
}: CharacteristicsCircleIconProps) => {
  return (
    <svg
      width="173"
      height="173"
      className={className}
      viewBox="0 0 173 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Tween
        from={{
          svgDraw: 0,
        }}
        to={{
          svgDraw: svgDrawTo,
          scrollTrigger: {
            start: `${startTrigger} 100vh`,
            end: '80% 100%',
          },
        }}>
        <circle
          id="target"
          r="84.5"
          cx="86.5"
          cy="86.5"
          fill="none"
          stroke="#282728"
          strokeWidth="4"
        />
      </Tween>
    </svg>
  )
}
