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
          Лифты для самых разнообразных назначений, от перевозки электронных
          плат (грузоподъемность 30 кг) до перевозки сложного технологического
          оборудования и экспонатов музея (грузоподъемность до 10 000 кг).
        </span>

        <div className={styles.specifications}>
          <div className={styles.info}>
            <CharacteristicsCircleIcon
              className={styles.loadedCircle}
              svgDrawTo={0.4}
            />
            <div className={styles.circle}>
              <span className={styles.circleText}>3.5м</span>
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
              <span className={styles.circleText}>10т</span>
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
