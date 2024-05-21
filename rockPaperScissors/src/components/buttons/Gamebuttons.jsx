import React from 'react'
import gamebuttons from "./gamebuttons.module.css"
import papersvg from "../../assets/images/icon-paper.svg"
import rocksvg from "../../assets/images/icon-rock.svg"
import scissorssvg from "../../assets/images/icon-scissors.svg"

const Gamebuttons = ({symbol}) => {

    const selection = symbol == "paper" ? papersvg : symbol == "rock" ? rocksvg : scissorssvg;
  return (
    <button className={`${gamebuttons[symbol]} ${gamebuttons.btncontainer}`}>
        <img className={`${gamebuttons[`${symbol}svg`]} ${gamebuttons.svg}`}src={selection} alt={`${symbol} svg`}/>
    </button>
  )
}

export default Gamebuttons
