import React, { useContext,useEffect} from 'react'
import header from "./header.module.css"
import { store } from '../../state'

const Header = () => {
  let [state,dispatch] = useContext(store)
  let  winstatus = state.winstatus;
  let score = state.score;
  useEffect(() => {
    // win
    if (winstatus == "YOU WIN"){
      if(score >= -1){
          dispatch({type:"ADD",payload:++score})
      }
    }
    // lose 
    if (winstatus == "YOU LOSE"){
        if(score > 0){
          dispatch({type:"MINUS",payload:--score})
        }      
    }
    return () => {
        
    };
  }, [winstatus]);

  return (
    <header className={header.header}>
        <h1 className={header.textheading}>ROCK<br></br>PAPER<br></br>SCISSORS</h1>
        <section className={header.score}>
            <h4 className={header.scoreheader}>SCORE</h4>
            <h2 className={header.scorenumber}>{score}</h2>
        </section>
    </header>
  )
}

export default Header
