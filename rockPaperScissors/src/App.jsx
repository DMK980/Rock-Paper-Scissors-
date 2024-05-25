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
  const [score,setScore] = useState(0)
  const [visiblemodule,setVisiblemodule] = useState("containerHidden")
  const [visiblerps,setVisiblerps] = useState("maincontainerHidden")
  const [winstatus,setWinstatus] = useState("win")
  const [userpick,setUserpick] = useState("")
  return (
    <main className={app.mainpage}>
      <Header score = {score}/>
      <Userpick.Provider value={[[userpick,setUserpick],[visiblerps,setVisiblerps]]}>
        <RockPaperScissors/>
      </Userpick.Provider>
      <Results winorlose={winstatus}/>
      <VisibleContext.Provider value={[visiblemodule,setVisiblemodule]}>
        <Functionalbtn text="RULES"/>
        <Rules/>
      </VisibleContext.Provider>
    </main>
  )
}

export default App

