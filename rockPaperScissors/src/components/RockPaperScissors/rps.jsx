import React from 'react'
import rockpaperscissors from "./rockpaperscissors.module.css"
import triangle from "../../assets/images/bg-triangle.svg"
import Gamebuttons from '../buttons/Gamebuttons'

const RockPaperScissors = () => {
  return (
    <section className={rockpaperscissors.maincontainer}>
        {/* triangle svg */}
        <div className={rockpaperscissors.trianglecontainer}>
            <img className={rockpaperscissors.trianglesvg}src={triangle}alt='triangle background'/>
        </div>
        {/* paper svg */}
        <Gamebuttons symbol="paper"/>
        {/* rock svg */}
        <Gamebuttons symbol="rock"/>
        {/* scissors svg */}
        <Gamebuttons symbol="scissors"/>
    </section>
  )
}

export default RockPaperScissors