import { gsap } from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IconProps } from '../types'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const UniquelyIcon = ({
  className,
  width,
  height,
  title,
  description,
}: IconProps) => {
  return (
    <div className={styles.iconWrap}>
      <Tween
        from={{ scaleY: -1 }}
        to={{
          scaleY: 1,
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
          viewBox="0 0 415 416"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="207.329"
            cy="208.028"
            r="205.8"
            stroke="url(#paint0_linear_442_204)"
            strokeWidth="2.8"
          />

          <path
            d="M413.129 208.029C413.129 296.648 321.326 369.029 207.329 369.029C93.3319 369.029 1.52891 296.648 1.52891 208.029C1.52891 119.41 93.3319 47.0289 207.329 47.0289C321.326 47.0289 413.129 119.41 413.129 208.029Z"
            stroke="url(#paint0_linear_442_204)"
            strokeWidth="2.8"
          />

          <path
            d="M413.129 208.029C413.129 236.614 390.535 262.848 353.202 282.02C315.942 301.153 264.37 313.029 207.329 313.029C150.288 313.029 98.7159 301.153 61.4559 282.02C24.1224 262.848 1.52891 236.614 1.52891 208.029C1.52891 179.444 24.1224 153.209 61.4559 134.038C98.7159 114.905 150.288 103.029 207.329 103.029C264.37 103.029 315.942 114.905 353.202 134.038C390.535 153.209 413.129 179.444 413.129 208.029Z"
            stroke="url(#paint0_linear_442_204)"
            strokeWidth="2.8"
          />
          <path
            d="M413.129 208.03C413.129 209.721 412.072 211.626 409.45 213.704C406.85 215.764 402.929 217.814 397.745 219.801C387.392 223.77 372.329 227.372 353.617 230.407C316.216 236.472 264.494 240.23 207.329 240.23C150.163 240.23 98.4418 236.472 61.0405 230.407C42.3287 227.372 27.266 223.77 16.9129 219.801C11.7289 217.814 7.80795 215.764 5.208 213.704C2.58594 211.626 1.52891 209.721 1.52891 208.03C1.52891 206.338 2.58594 204.433 5.208 202.355C7.80795 200.295 11.7289 198.246 16.9129 196.258C27.266 192.289 42.3287 188.687 61.0405 185.653C98.4418 179.588 150.163 175.83 207.329 175.83C264.494 175.83 316.216 179.588 353.617 185.653C372.329 188.687 387.392 192.289 397.745 196.258C402.929 198.246 406.85 200.295 409.45 202.355C412.072 204.433 413.129 206.338 413.129 208.03Z"
            stroke="url(#paint0_linear_442_204)"
            strokeWidth="2.8"
          />
          {/* </Tween> */}

          <defs>
            <linearGradient
              id="paint0_linear_442_204"
              x1="153.243"
              y1="299.613"
              x2="255.178"
              y2="172.42"
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
