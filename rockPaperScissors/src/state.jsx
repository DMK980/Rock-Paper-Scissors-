import { createContext } from "react"
// Iniial State
export const initialState = {
    score : 0,
    visiblemodule : "containerHidden",
    visiblerps : "maincontainer",
    visibleresults : "maincontainerHidden",
    winstatus : "YOU WIN",
    userpick : "paper",
    comppick : "rock"
}

export const store = createContext()

// Reducer
export const reducer = (state,action) => {
    switch(action.type){
        // Score logic
      case "ADD":
        return {
            ...state,
            score: state.score++
        }
      case "MINUS":
        if (state.score == 0){
            return {...state}
        }else {
            return {
                ...state,
                score:state.score--
            }
        }
        // Rules Module visibility logic
      case "MODULEVISIBILITY":
        if (state.visiblemodule == "containerHidden"){
            return {
                ...state,
                visiblemodule: "containerVisible"
            }
        } else if(state.visiblemodule == "containerVisible"){
            return {
                ...state,
                visiblemodule: "containerHidden"
            }
        }
        // Rock Paper Scissors controls visibility logic
      case "RPSVISIBILITY":
        if (state.visiblerps == "maincontainer"){
            return {
                ...state,
                visiblerps: "maincontainerHidden"
            }
        } else if(state.visiblerps == "maincontainerHidden"){
            return {
                ...state,
                visiblerps: "maincontainer"
            }
        }
        // Results UI visibility
      case "RESULTSVISIBILITY":
        if (state.visibleresults == "maincontainerHidden"){
            return {
                ...state,
                visibleresults: "maincontainer"
            }
        } else {
            return {
                ...state,
                visibleresults : "maincontainerHidden"
            }
        }
        // Win status update win lose or draw
      case "WINSTATUS":
        return {
            ...state,
            winstatus : action.payload
        }
        // User selects 
      case "USERPICK":
        return {
            ...state,
            userpick : action.payload
        }
        // computer selects
      case "COMPPICK":
        return {
            ...state,
            comppick : action.payload
        }
      default:
        return {...state}
    }
  }

