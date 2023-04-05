import React from 'react'

import qualityElevatorImg from '../../../../../../assets/images/special/characteristics/qualityElevator.png'
import styles from './styles.module.scss'
import { CharacteristicsCircleIcon } from '../../../../../../assets/icons'

export const Quality: React.FC = () => {
  return (
    <div className={styles.characteristics}>
      <div className={styles.characteristicsImageWrap}>
        <img
          src={qualityElevatorImg}
          alt=""
          className={styles.characteristicsImage}
        />
      </div>

      <div className={styles.characteristicsText}>
        <span className="specialTitle">Качество</span>
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
              svgDrawTo={0.54}
              startTrigger="1800vh"
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
              svgDrawTo={0.6}
              startTrigger="1800vh"
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>5т</span>
            </div>
            <span className="color-grey">максимальная</span>
            <span className={styles.infoText}>грузоподъёмность</span>
          </div>
        </div>
      </div>
    </div>
  )
}
