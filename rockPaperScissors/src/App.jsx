import React, { useState } from 'react'
import Header from './components/Header/header'
import app from "./App.module.css"

const App = () => {
  const [score,setScore] = useState(0)
  return (
    <main className={app.mainpage}>
      <Header score = {score}/>
    </main>
  )
}

export default App

