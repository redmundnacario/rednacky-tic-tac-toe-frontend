import React, { createContext, useContext, useEffect, useState } from 'react'

interface GameLogicReturnType {
  squares: string[]
  handleClick: (value: number) => void
}

const GameLogicContext = createContext<GameLogicReturnType | undefined>(
  undefined
)

const WithGameLogic = ({ children }: { children: JSX.Element }) => {
  const [history, setHistory] = useState([new Array(9)])
  const [squares, setSquares] = useState(history[0])

  const [isGameDone, setIsGameDone] = useState<boolean>(false)
  const [turn, setTurn] = useState<number>(0)
  const [isXTurn, setIsXTurn] = useState<boolean>(true)

  useEffect(() => {
    setSquares(history[history.length - 1])
  }, [history])

  const handleClick = (i: number) => {
    console.log('hello', i)
    if (isGameDone) {
      return
    }
    if (turn >= 9) {
      setIsGameDone(true)
      return
    }
    const _history = history.slice(0, turn + 1)
    const _squares = [..._history[_history.length - 1]]
    console.log('history:', _history.length, turn)

    if (_squares[i]) {
      return
    }

    const winner = concludeWinner(_squares)

    if (winner) {
      setIsGameDone(true)
      return
    }

    _squares[i] = isXTurn ? 'X' : 'O'
    setHistory([..._history, _squares])
    setTurn(_history.length)
    setIsXTurn(!isXTurn)
  }

  return (
    <GameLogicContext.Provider
      value={{
        squares,
        handleClick
      }}
    >
      {children}
    </GameLogicContext.Provider>
  )
}

export const useGameLogicContext = (): GameLogicReturnType => {
  const context = useContext(GameLogicContext)

  if (context == null) {
    throw new Error(
      'useGameLogicContext has to be called in GameLogicContext.Provider '
    )
  }

  return context
}

export default WithGameLogic

function concludeWinner (squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const length = lines.length
  for (let i = 0; i < length; i++) {
    const [a, b, c] = lines[i]
    const player = squares[a]
    if (player && player === squares[b] && player === squares[c]) {
      return player
    }
  }
  return null
}
