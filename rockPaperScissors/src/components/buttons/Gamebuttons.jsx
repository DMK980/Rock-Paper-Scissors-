import React, { useContext } from 'react'
import gamebuttons from "./gamebuttons.module.css"
import papersvg from "../../assets/images/icon-paper.svg"
import rocksvg from "../../assets/images/icon-rock.svg"
import scissorssvg from "../../assets/images/icon-scissors.svg"
import { store } from '../../state'

const Gamebuttons = ({symbol,clickable = true}) => {

  const [state,dispatch] = useContext(store)

  // logic to make component reusable across the application
  const selection = symbol == "paper" ? papersvg : symbol == "rock" ? rocksvg : scissorssvg;
  
  const clicked = ()=>{
    if (clickable){
      let symbols = ["paper","scissors","rock"]
      let pick = symbols[Math.floor(Math.random()*3)]
      dispatch({type:"USERPICK",payload:symbol})
      dispatch({type:"COMPPICK",payload:pick})
      dispatch({type:"RPSVISIBILITY"})
      dispatch({type:"RESULTSVISIBILITY"})
    }
  }
  return (
    <button type="button"
            className={`${gamebuttons[symbol]} ${gamebuttons.btncontainer}`}
            onClick={clicked}
    >
        <img className={`${gamebuttons[`${symbol}svg`]} ${gamebuttons.svg}`}
             src={selection} 
             alt={`${symbol} svg`}
        />
    </button>
  ) 
}

export default Gamebuttons
