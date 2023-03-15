import React from 'react'

import {
  BubblesForDesktop,
  BubblesForLaptop,
  BubblesForTablet,
  BubblesForMobile,
} from '../../../../assets/icons'
import useWindowSize from '../../../../hook/useWindowSize'

interface BubblesType {
  className: string
}

export const BubblesIcon: React.FC<BubblesType> = ({ className }) => {
  const [width] = useWindowSize()

  const Bubbles = () => {
    if (width >= 1024) {
      return <BubblesForDesktop className={className} />
    } else if (width > 768 && width < 1024) {
      return <BubblesForLaptop className={className} />
    } else if (width > 768 && width < 1024) {
      return <BubblesForTablet className={className} />
    } else {
      return <BubblesForMobile className={className} />
    }
  }

  return <Bubbles />
}
