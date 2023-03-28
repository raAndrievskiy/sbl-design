import React from 'react'

import qualityElevatorImg from '../../../../../../assets/images/special/characteristics/qualityElevator.png'
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
        <span className={styles.characteristicsTitle}>Уникальность</span>
        <span className={styles.characteristicsDescription}>
          Разрабатывая подобные идеи ты входишь в них с головой и со всем
          вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные
          идеи ты входишь в них с головой и со всем вниманием к процессу не
          ожидая ничего взамен.
        </span>

        <div className={styles.specifications}>
          <div className={styles.info}>
            <div className={styles.circle}>
              <span className={styles.circleText}>2.5м</span>
            </div>
            <span className="color-grey">максимальная</span>
            <span className={styles.infoText}>высота кабин</span>
          </div>

          <div className={styles.info}>
            <div className={styles.circle}>
              <span className={styles.circleText}>2.5м</span>
            </div>
            <span className="color-grey">максимальная</span>
            <span className={styles.infoText}>высота кабин</span>
          </div>
        </div>
      </div>
    </div>
  )
}
