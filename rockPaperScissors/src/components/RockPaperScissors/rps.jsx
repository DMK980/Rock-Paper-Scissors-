import React, { useContext } from 'react'
import rockpaperscissors from "./rockpaperscissors.module.css"
import triangle from "../../assets/images/bg-triangle.svg"
import Gamebuttons from '../buttons/Gamebuttons'
import { Userpick } from '../../App'

const RockPaperScissors = () => {
  const [visiblerps,setVisiblerps] = useContext(Userpick)[1]
  return (
    <section className={rockpaperscissors[visiblerps]}>
        {/* triangle svg */}
        <div className={rockpaperscissors.trianglecontainer}>
            <img className={rockpaperscissors.trianglesvg}src={triangle}alt='triangle background'/>
        </div>
        {/* paper svg */} 
        <Gamebuttons symbol="paper" bgcolor="lightgrey"/>
        {/* rock svg */}
        <Gamebuttons symbol="rock"/>
        {/* scissors svg */}
        <Gamebuttons symbol="scissors"/>
    </section>
  )
}

export default RockPaperScissors