import React from 'react'
import Square from './Square'

import styles from '../styles/components/Board.module.css'

interface BoardPropsType {
  squareData: string[]
  // isFinished: boolean;
  onClick: (i: number) => void
}

const Board: React.FC<BoardPropsType> = ({
  squareData,
  // isFinished,
  onClick
}) => {
  return (
    <div>
      <div className={styles.boardRow}>
        <Square
          value={squareData[0]}
          onClick={() => {
            onClick(0)
          }}
        />
        <Square
          value={squareData[1]}
          onClick={() => {
            onClick(1)
          }}
        />
        <Square
          value={squareData[2]}
          onClick={() => {
            onClick(2)
          }}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squareData[3]}
          onClick={() => {
            onClick(3)
          }}
        />
        <Square
          value={squareData[4]}
          onClick={() => {
            onClick(4)
          }}
        />
        <Square
          value={squareData[5]}
          onClick={() => {
            onClick(5)
          }}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squareData[6]}
          onClick={() => {
            onClick(6)
          }}
        />
        <Square
          value={squareData[7]}
          onClick={() => {
            onClick(7)
          }}
        />
        <Square
          value={squareData[8]}
          onClick={() => {
            onClick(8)
          }}
        />
      </div>
    </div>
  )
}

export default Board
