import React from 'react'
import results from "./results.module.css"

const Results = ({winorlose}) => {

    const WorL = winorlose == "win" ? "YOU WIN" : "YOU LOSE";
  return (
    <section className={results.container}>
        <div className={results.topsection}>
            <div className={results.resultscontainer}>
                <div className={`${results.userpick} ${results.results}`}></div>
                <h3 className={results.header}>YOU PICKED</h3>
            </div>
            <div className={results.resultscontainer}>
                <div className={`${results.userpick} ${results.results}`}></div>
                <h3 className={results.header}>THE HOUSE PICKED</h3>
            </div>
        </div>
        <h1 className={results.announcement}>{WorL}</h1>
    </section>
  )
}

export default Results
