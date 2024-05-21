import React, { useState } from 'react'
import Header from './components/Header/header'
import app from "./App.module.css"
import RockPaperScissors from './components/RockPaperScissors/rps'
import Gamebuttons from './components/buttons/Gamebuttons'

const App = () => {
  const [score,setScore] = useState(0)
  return (
    <main className={app.mainpage}>
      <Header score = {score}/>
      <RockPaperScissors/>
    </main>
  )
}

export default App

