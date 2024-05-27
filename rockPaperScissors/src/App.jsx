// hooks
import React,{useReducer} from 'react'
// css
import app from "./App.module.css"
// components
import Header from './components/Header/header'
import RockPaperScissors from './components/RockPaperScissors/rps'
import Functionalbtn from './components/buttons/functionalbtn'
import Rules from './components/rules/Rules'
import Results from './components/results/Results'
// state
import { reducer,initialState } from './state'
import { store } from './state' 

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <main className={app.mainpage}>
      <store.Provider value={[state,dispatch]}>
        <Header/>
        <RockPaperScissors/>
        <Results/>
        <Functionalbtn 
          text="PLAY AGAIN"
          backgroundcolor="white"
          color="hsl(229, 25%, 31%)"
          alignself="center"
          fontWeight="700"
        />
        <Functionalbtn text="RULES"/>
        <Rules/>
      </store.Provider>
    </main>
  )
}

export default App

