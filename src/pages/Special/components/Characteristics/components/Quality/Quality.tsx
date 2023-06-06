import React from 'react'

import qualityElevatorImg from '../../../../../../assets/images/special/characteristics/qualityElevator.png'
import { CharacteristicsCircleIcon } from '../../../../../../assets/icons'
import styles from './styles.module.scss'

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
          Контроль на всех этапах производства, собственный конструкторский
          отдел позволяют контролировать и адаптировать необходимые процессы и
          решения.
        </span>

        <div className={styles.specifications}>
          <div className={styles.info}>
            <CharacteristicsCircleIcon
              className={styles.loadedCircle}
              svgDrawTo={0.54}
              startTrigger="1800vh"
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>
                с машинным и без машинного помещения
              </span>
            </div>
          </div>

          <div className={styles.info}>
            <CharacteristicsCircleIcon
              className={styles.loadedCircle}
              svgDrawTo={0.6}
              startTrigger="1800vh"
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>
                автоматические и распашные двери
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
