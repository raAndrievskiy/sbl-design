import React from 'react'

import { Container } from '../../../../components'
import { StylishIcon, UniquelyIcon, BestIcon } from '../../../../assets/icons'
import useWindowSize from '../../../../hook/useWindowSize'
import styles from './styles.module.scss'

export const Icons: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <Container>
      <div className={`${styles.premiumIcons} premiumIconsTrigger`}>
        <StylishIcon
          width={width > 1440 ? 466 : 342}
          height={width > 1440 ? 423 : 311}
          className={styles.stylish}
          title="Стильные"
          description="Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием"
        />
        <UniquelyIcon
          width={width > 1440 ? 414 : 343}
          height={width > 1440 ? 414 : 343}
          className={styles.uniquelyIcon}
          title="Уникальные"
          description="Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием"
        />
        <BestIcon
          width={width > 1440 ? 408 : 343}
          height={width > 1440 ? 408 : 343}
          className={styles.bestIcon}
          title="Лучшие"
          description="Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием"
        />
      </div>
    </Container>
  )
}
