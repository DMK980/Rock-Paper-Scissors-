import React,{useState,createContext} from 'react'
import Header from './components/Header/header'
import app from "./App.module.css"
import RockPaperScissors from './components/RockPaperScissors/rps'
import Functionalbtn from './components/buttons/functionalbtn'
import Rules from './components/rules/Rules'
import Results from './components/results/Results'

export const VisibleContext = createContext()
export const Userpick = createContext()

const App = () => {
  const [score,setScore] = useState(-1)
  const [visiblemodule,setVisiblemodule] = useState("containerHidden")
  const [visiblerps,setVisiblerps] = useState("maincontainer")
  const [winstatus,setWinstatus] = useState("YOU WIN")
  const [userpick,setUserpick] = useState("paper")
  const [comppick,setComppick] = useState("rock")
  return (
    <main className={app.mainpage}>
      <Header score = {score}/>
      <Userpick.Provider value={[[userpick,setUserpick],[visiblerps,setVisiblerps],[comppick,setComppick],[winstatus,setWinstatus],[score,setScore]]}>
        <RockPaperScissors/>
        <Results/>
      </Userpick.Provider>
      <VisibleContext.Provider value={[visiblemodule,setVisiblemodule]}>
        <Functionalbtn text="PLAY AGAIN"backgroundcolor="white"color="hsl(229, 25%, 31%)"alignself="center"fontWeight="700"/>
        <Functionalbtn text="RULES"/>
        <Rules/>
      </VisibleContext.Provider>
    </main>
  )
}

export default App

