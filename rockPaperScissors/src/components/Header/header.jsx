import React from 'react'
import header from "./header.module.css"

const Header = () => {
  return (
    <header className={header.header}>
        <section className={header.text}>
            <h1 className={header.textheading}>ROCK<br></br>PAPER<br></br>SCISSORS</h1>
        </section>
        <section className={header.score}>
            <p className={header.scoreheader}>SCORE</p>
            <h2 className={header.scorenumber}>12</h2>
        </section>
    </header>
  )
}

export default Header
