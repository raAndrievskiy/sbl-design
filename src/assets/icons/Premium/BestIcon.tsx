import { gsap } from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IconProps } from '../types'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const BestIcon = ({
  className,
  width,
  height,
  title,
  description,
}: IconProps) => {
  return (
    <div className={styles.iconWrap}>
      <Tween
        from={{ rotate: 0 }}
        to={{
          rotate: -90,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <svg
          width={width}
          height={height}
          className={className}
          viewBox="0 0 409 407"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="204.6"
            cy="56.1289"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="204.6"
            cy="350.129"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="56.1992"
            cy="204.527"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="103.799"
            cy="103.73"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="103.799"
            cy="302.527"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="305.398"
            cy="302.527"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="305.398"
            cy="103.73"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <circle
            cx="353"
            cy="204.527"
            r="54.6"
            stroke="url(#paint0_linear_442_213)"
            strokeWidth="2.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_442_213"
              x1="151.244"
              y1="292.858"
              x2="250.962"
              y2="167.574"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#054D5C" />
              <stop offset="1" stopColor="#289DB6" />
            </linearGradient>
          </defs>
        </svg>
      </Tween>

      <div className={styles.iconText}>
        <span className={styles.iconTitle}>{title}</span>
        <span className={styles.iconDescription}>{description}</span>
      </div>
    </div>
  )
}
