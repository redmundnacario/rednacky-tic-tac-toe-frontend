import React from 'react'

import styles from '../styles/components/Square.module.css'

interface SquarePropsType {
  value: string
  onClick: () => void
}

const Square: React.FC<SquarePropsType> = (props) => {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
