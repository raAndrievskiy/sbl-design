import React from 'react'

import useWindowSize from '../../hook/useWindowSize'
import { HeaderDesktop, HeaderMobile } from './components'

export const Header: React.FC = () => {
  const [width] = useWindowSize()

  return <>{width > 1024 ? <HeaderDesktop /> : <HeaderMobile />}</>
}
