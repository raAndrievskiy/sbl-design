import { gsap } from 'gsap'
import { Tween } from 'react-gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IconProps } from '../types'

gsap.registerPlugin(ScrollTrigger)

export const StylishIcon = ({ className, width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 584 551"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Tween
        from={{ yPercent: 8, xPercent: -9 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M422.656 461.339C403.01 485.182 365.872 491.298 321.155 481.27C276.525 471.261 224.789 445.241 176.587 405.525C128.385 365.809 92.9504 320.005 74.591 278.113C56.1961 236.14 55.0965 198.518 74.7424 174.676C94.3882 150.833 131.526 144.717 176.243 154.745C220.873 164.753 272.609 190.774 320.811 230.49C369.013 270.206 404.448 316.01 422.807 357.901C441.202 399.874 442.301 437.496 422.656 461.339Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <Tween
        from={{ yPercent: 4, xPercent: -5 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M435.038 449.241C415.393 473.084 378.254 479.2 333.538 469.172C288.907 459.163 237.172 433.143 188.97 393.427C140.768 353.711 105.333 307.907 86.9739 266.015C68.579 224.043 67.4794 186.421 87.1252 162.578C106.771 138.735 143.909 132.619 188.626 142.647C233.256 152.656 284.992 178.676 333.194 218.392C381.396 258.108 416.83 303.912 435.19 345.804C453.585 387.776 454.684 425.398 435.038 449.241Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>

      <path
        d="M447.413 437.136C427.768 460.979 390.629 467.094 345.913 457.066C301.282 447.058 249.547 421.038 201.345 381.322C153.143 341.605 117.708 295.802 99.3489 253.91C80.954 211.937 79.8544 174.315 99.5002 150.472C119.146 126.63 156.284 120.514 201.001 130.542C245.631 140.55 297.367 166.571 345.569 206.287C393.771 246.003 429.205 291.806 447.565 333.698C465.96 375.671 467.059 413.293 447.413 437.136Z"
        stroke="url(#paint0_linear_442_191)"
        strokeWidth="2.8"
      />

      <Tween
        from={{ yPercent: -4, xPercent: 3 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M459.794 425.026C440.148 448.869 403.01 454.985 358.294 444.957C313.663 434.949 261.928 408.928 213.726 369.212C165.524 329.496 130.089 283.692 111.73 241.801C93.3348 199.828 92.2352 162.206 111.881 138.363C131.527 114.52 168.665 108.404 213.382 118.432C258.012 128.441 309.748 154.461 357.95 194.177C406.151 233.893 441.586 279.697 459.946 321.589C478.341 363.562 479.44 401.183 459.794 425.026Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <Tween
        from={{ yPercent: -8, xPercent: 3 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M472.175 412.929C452.529 436.772 415.391 442.887 370.674 432.859C326.044 422.851 274.309 396.83 226.107 357.114C177.905 317.398 142.47 271.595 124.111 229.703C105.716 187.73 104.616 150.108 124.262 126.265C143.908 102.423 181.046 96.3068 225.763 106.335C270.393 116.343 322.128 142.364 370.33 182.08C418.532 221.796 453.967 267.599 472.326 309.491C490.721 351.464 491.821 389.086 472.175 412.929Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <Tween
        from={{ yPercent: -12, xPercent: 7 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M484.558 400.823C464.912 424.666 427.774 430.782 383.057 420.754C338.427 410.745 286.691 384.725 238.489 345.009C190.288 305.293 154.853 259.489 136.493 217.598C118.098 175.625 116.999 138.003 136.645 114.16C156.291 90.3171 193.429 84.2013 238.145 94.2293C282.776 104.238 334.511 130.258 382.713 169.974C430.915 209.69 466.35 255.494 484.709 297.386C503.104 339.359 504.204 376.98 484.558 400.823Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <Tween
        from={{ yPercent: -16, xPercent: 11 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M496.933 388.726C477.287 412.568 440.149 418.684 395.432 408.656C350.802 398.648 299.066 372.627 250.864 332.911C202.663 293.195 167.228 247.392 148.868 205.5C130.473 163.527 129.374 125.905 149.02 102.062C168.666 78.2195 205.804 72.1037 250.52 82.1316C295.151 92.1402 346.886 118.161 395.088 157.877C443.29 197.593 478.725 243.396 497.084 285.288C515.479 327.261 516.579 364.883 496.933 388.726Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <Tween
        from={{ yPercent: -19, xPercent: 15 }}
        to={{
          yPercent: 0,
          xPercent: 0,
          scrollTrigger: {
            trigger: '.premiumIconsTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        }}>
        <path
          d="M509.314 376.616C489.668 400.459 452.53 406.575 407.813 396.547C363.183 386.538 311.447 360.518 263.245 320.802C215.043 281.086 179.609 235.282 161.249 193.39C142.854 151.418 141.755 113.796 161.401 89.953C181.046 66.1101 218.185 59.9943 262.901 70.0222C307.532 80.0308 359.267 106.051 407.469 145.767C455.671 185.483 491.106 231.287 509.465 273.179C527.86 315.151 528.96 352.773 509.314 376.616Z"
          stroke="url(#paint0_linear_442_191)"
          strokeWidth="2.8"
        />
      </Tween>
      <defs>
        <linearGradient
          id="paint0_linear_442_191"
          x1="172.2"
          y1="305.197"
          x2="273.721"
          y2="165.723"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#054D5C" />
          <stop offset="1" stopColor="#289DB6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
