import React, { useContext } from 'react'
import rules from "../../assets/images/image-rules.svg"
import rulescss from "./rulescss.module.css"
import { VisibleContext } from '../../App'

const Rules = () => {
    const [visiblemodule,setVisiblemodule] = useContext(VisibleContext)

    const clicked = ()=>{
        setVisiblemodule("containerHidden")
    }
  return (
    <span className={rulescss[visiblemodule]}>
        <h1 className={rulescss.heading}>
            RULES 
            <button className={rulescss.buttontop}type='button'onClick={clicked}>X</button>
        </h1>
        <img className={rulescss.image}src={rules}alt="rules module"/>
        <button className={rulescss.button}type='button'onClick={clicked}>X</button>
    </span>
  )
}

export default Rules
