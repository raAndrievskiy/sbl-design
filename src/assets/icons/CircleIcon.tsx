import React from 'react'
import { IconProps } from './types'

export const CircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { className } = props

    return (
      <svg
        className={className}
        ref={ref}
        {...props}
        viewBox="0 0 1556 1556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="778" cy="778" r="777.5" stroke="#282728" />
      </svg>
    )
  },
)
