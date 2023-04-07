import gsap from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CharacteristicsCircleIconProps } from './types'
import useWindowSize from '../../hook/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

export const CharacteristicsCircleIcon = ({
  className,
  svgDrawTo,
  startTrigger,
}: CharacteristicsCircleIconProps) => {
  const [width] = useWindowSize()

  return (
    <svg
      width={width > 1024 ? '173' : '120'}
      height={width > 1024 ? '173' : '120'}
      className={className}
      viewBox={width > 1024 ? '0 0 173 173' : '0 0 120 120'}
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
          r={width > 1024 ? '84.5' : '58'}
          cx={width > 1024 ? '86.5' : '60'}
          cy={width > 1024 ? '86.5' : '60'}
          fill="none"
          stroke="#282728"
          strokeWidth="4"
        />
      </Tween>
    </svg>
  )
}
