import React from 'react'

import { Container } from '../../../../components'
import styles from './styles.module.scss'
import useWindowSize from '../../../../hook/useWindowSize'

export const Letter: React.FC = () => {
  const [width] = useWindowSize()

  return (
    <Container>
      <div className={styles.letter}>
        <svg className={styles.svg} viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x={width > 1024 ? '15%' : '30%'} y="80%">
              S
            </text>
            <text textAnchor="middle" x="50%" y="80%">
              B
            </text>
            <text textAnchor="middle" x={width > 1024 ? '85%' : '70%'} y="80%">
              L
            </text>
          </symbol>

          <g className={styles.gAnts}>
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
            <use xlinkHref="#s-text" className={styles.textCopy} />
          </g>
        </svg>

        <div className={styles.contentWrap}>
          <div className={styles.content1}>
            <div className={styles.content1__container}>
              {/* <p className={styles.content__container__text}>Hello</p> */}

              <ul className={styles.content1__container__list}>
                <li className={styles.content1__container__list__item}>Сила</li>
                <li className={styles.content1__container__list__item}>
                  Cтиль
                </li>
                <li className={styles.content1__container__list__item}>
                  Cмысл
                </li>
                {/* <li className={styles.content__container__list__item}>
                everybody !
              </li> */}
              </ul>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.content2__container}>
              {/* <p className={styles.content2__container__text}>Hello</p> */}

              <ul className={styles.content2__container__list}>
                <li className={styles.content2__container__list__item}>
                  Быстрота действия
                </li>
                <li className={styles.content2__container__list__item}>
                  База знаний
                </li>
                <li className={styles.content2__container__list__item}>
                  Благотворительность
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content3}>
            <div className={styles.content3__container}>
              {/* <p className={styles.content__container__text}>Hello</p> */}

              <ul className={styles.content3__container__list}>
                <li className={styles.content3__container__list__item}>
                  Лучшие лифты!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
