import React from 'react'
import { CharacteristicsCircleIcon } from '../../../../../../assets/icons'

import uniqueElevatorImg from '../../../../../../assets/images/special/characteristics/uniqueElevator.png'
import useWindowSize from '../../../../../../hook/useWindowSize'
import styles from './styles.module.scss'

export const Uniqueness: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <div className={`${styles.characteristics} characteristics`}>
      <div className={styles.characteristicsText}>
        <span className="specialTitle">Уникальность</span>
        <span className={styles.characteristicsDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
          идеи ты входишь в них с головой и со всем вниманием к процессу не
          ожидая ничего взамен.
        </span>

        <div className={styles.specifications}>
          <div className={styles.info}>
            <CharacteristicsCircleIcon
              className={styles.loadedCircle}
              svgDrawTo={0.4}
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>2.5м</span>
            </div>
            <span className="color-grey">максимальная</span>
            <span className={styles.infoText}>высота кабин</span>
          </div>

          <div className={styles.info}>
            <CharacteristicsCircleIcon
              className={styles.loadedCircle}
              svgDrawTo={0.7}
              startTrigger="960vh"
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>5т</span>
            </div>
            <span className="color-grey">максимальная</span>
            <span className={styles.infoText}>грузоподъёмность</span>
          </div>
        </div>
      </div>

      <div className={styles.characteristicsImageWrap}>
        <img
          src={uniqueElevatorImg}
          alt=""
          className={styles.characteristicsImage}
        />
      </div>
    </div>
  )
}
