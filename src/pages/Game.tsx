import React from 'react'
import Board from '../components/Board'
import { useGameLogicContext } from '../context/WithGameLogic'

const GamePage = () => {
  const { squares, handleClick } = useGameLogicContext()

  return (
    <div>
      <h1>GamePage</h1>
      <Board squareData={squares} onClick={handleClick} />
    </div>
  )
}

export default GamePage
