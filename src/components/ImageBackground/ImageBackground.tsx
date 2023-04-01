import React from 'react'

import styles from './styles.module.scss'

interface ImageBackgroundTypes {
  text: string
}

export const ImageBackground: React.FC<ImageBackgroundTypes> = ({ text }) => {
  return (
    <div className={styles.typeElevator}>
      <div className={styles.typeElevatorMain}>
        <span className={`${styles.typeElevatorMainText} color-white`}>
          SBL DESIGN – {text}
        </span>
      </div>
    </div>
  )
}
