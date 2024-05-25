import React, { useContext } from 'react'
import functionalbtn from "./functionalbtn.module.css"
import { VisibleContext } from '../../App'

const Functionalbtn = ({text, backgroundcolor,color,alignself}) => {
    const [visiblemodule,setVisiblemodule] = useContext(VisibleContext)
    const styles = {
        backgroundColor : backgroundcolor ? backgroundcolor : "transparent",
        color : color ? color : "white",
        alignSelf : alignself ? alignself : "" 
    }
    const clicked = ()=>{
      if (text == "RULES"){
        setVisiblemodule("containerVisible")
      }
    }
  return ( 
    <button type="button"
            className={functionalbtn.button} 
            style={styles}
            onClick={clicked}
    >
        {text}
    </button>
  )
}

export default Functionalbtn
