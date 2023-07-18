import { Route, Routes } from 'react-router-dom'

import GamePage from './pages/Game'
import NotFoundPage from './pages/NotFound'
import HomePage from './pages'
import WithGameLogic from './context/WithGameLogic'

// import "./App.css";
// import styles from "@styles/App.module.css";
//  <div className={styles.app}>

const App = () => {
  return (
    <div className="app">
      <WithGameLogic>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </WithGameLogic>
    </div>
  )
}

export default App
