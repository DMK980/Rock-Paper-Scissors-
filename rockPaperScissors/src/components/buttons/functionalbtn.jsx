import React, { useContext} from 'react'
import functionalbtn from "./functionalbtn.module.css"
import { store } from '../../state'

const Functionalbtn = ({text, backgroundcolor,color,alignself,fontWeight}) => {

    const [state,dispatch] = useContext(store)
    const styles = {
        backgroundColor : backgroundcolor ? backgroundcolor : "transparent",
        color : color ? color : "white",
        alignSelf : alignself ? alignself : "" ,
        fontWeight: fontWeight ? fontWeight : ""
    }
    const clicked = ()=>{
      if (text == "RULES"){
        dispatch({type:"MODULEVISIBILITY"})
      }
      if (text == "PLAY AGAIN"){
        dispatch({type:"RPSVISIBILITY"})
        dispatch({type:"RESULTSVISIBILITY"})
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
