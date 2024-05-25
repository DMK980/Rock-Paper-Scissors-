import React, { useContext } from 'react'
import gamebuttons from "./gamebuttons.module.css"
import papersvg from "../../assets/images/icon-paper.svg"
import rocksvg from "../../assets/images/icon-rock.svg"
import scissorssvg from "../../assets/images/icon-scissors.svg"
import { Userpick } from '../../App'

const Gamebuttons = ({symbol,bgcolor,bxshadow}) => {

  const [userpick,setUserpick] = useContext(Userpick)[0]

  // logic to make component reusable across the application
  const selection = symbol == "paper" ? papersvg : symbol == "rock" ? rocksvg : scissorssvg;
  const styles1 = {
    backgroundImage: bgcolor ? bgcolor : "dark-grey"
  }
  const styles2 = {
    boxShadow: bxshadow ? bxshadow : "inset -1px 3px 2px 2px darkgrey"
  }

  const clicked = ()=>{
    setUserpick(symbol)
  }
  return (
    <button type="button"
            className={`${gamebuttons[symbol]} ${gamebuttons.btncontainer}`}
            style={styles1}
            onClick={clicked}
    >
        <img className={`${gamebuttons[`${symbol}svg`]} ${gamebuttons.svg}`}
             src={selection} 
             alt={`${symbol} svg`}
             style={styles2}
        />
    </button>
  ) 
}

export default Gamebuttons
