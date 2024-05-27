import React, { useContext, useEffect } from 'react'
import results from "./results.module.css"
import Gamebuttons from '../buttons/Gamebuttons';
import { store } from '../../state';

const Results = () => {
    const [state,dispatch] = useContext(store)
    let userpick = state.userpick
    let comppick = state.comppick
    let winstatus = state.winstatus
    let visibleresults = state.visibleresults

  return (
    <section className={results[visibleresults]}>
        <div className={results.topsection}>
            <div className={`${results.leftsidecontainer} ${results.symbolcontainers}`}>
                <div className={`${results.usersymbol} ${results.symbols}`}>
                    <Gamebuttons symbol={userpick} clickable={false}/>
                </div>
                <h3 className={results.subheader}>YOU PICKED</h3>
            </div>
            <div className={`${results.rightsidecontainer} ${results.symbolcontainers}`}>
                <div className={`${results.compsymbol} ${results.symbols}`}>
                    <Gamebuttons symbol = {comppick} clickable={false}/>
                </div>
                <h3 className={results.subheader}>THE HOUSE PICKED</h3>
            </div>
        </div>
        <h1 className={results.header}>{winstatus}</h1>
    </section>
  )
}

export default Results
