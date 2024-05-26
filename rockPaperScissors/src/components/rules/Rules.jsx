import React, { useContext } from 'react'
import rules from "../../assets/images/image-rules.svg"
import rulescss from "./rulescss.module.css"
import { store } from '../../state'

const Rules = () => {
    const [state,dispatch] = useContext(store)

    const visiblemodule = state.visiblemodule

    const clicked = ()=>{
        dispatch({type:"MODULEVISIBILITY"})
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
