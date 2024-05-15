import React from 'react'
import header from "./header.module.css"

const Header = ({score}) => {
  return (
    <header className={header.header}>
        <h1 className={header.textheading}>ROCK<br></br>PAPER<br></br>SCISSORS</h1>
        <section className={header.score}>
            <h4 className={header.scoreheader}>SCORE</h4>
            <h2 className={header.scorenumber}>{score}</h2>
        </section>
    </header>
  )
}

export default Header
