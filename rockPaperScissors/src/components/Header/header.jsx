import React, { useContext } from 'react'
import header from "./header.module.css"
import { store } from '../../state'

const Header = () => {

  const [state,dispatch] = useContext(store)
  return (
    <header className={header.header}>
        <h1 className={header.textheading}>ROCK<br></br>PAPER<br></br>SCISSORS</h1>
        <section className={header.score}>
            <h4 className={header.scoreheader}>SCORE</h4>
            <h2 className={header.scorenumber}>{state.score}</h2>
        </section>
    </header>
  )
}

export default Header
