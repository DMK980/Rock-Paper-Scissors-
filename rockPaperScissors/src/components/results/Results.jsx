import React, { useContext, useEffect } from 'react'
import results from "./results.module.css"
import Gamebuttons from '../buttons/Gamebuttons';
import { Userpick } from '../../App';

const Results = () => {

    const [winstatus,setWinstatus]= useContext(Userpick)[3]
    const comppick= useContext(Userpick)[2][0]
    const userpick= useContext(Userpick)[0][0]
    const [score,setScore] = useContext(Userpick)[4]

    useEffect(() => {
        // draw
        if (userpick == comppick){
            setWinstatus("DRAW")
        }
        // lose 
        if (userpick == "paper" & comppick =="scissors" | userpick == "rock" & comppick == "paper" | userpick == "scissors" & comppick == "rock"){
            setWinstatus("YOU LOSE")
            if (score > -1){
            let subtractscore = score - 1 == -1 ? 0 : score -1 ;
            setScore(subtractscore)   
            }
        }
        // Win
        if (userpick == "paper" & comppick =="rock" | userpick == "rock" & comppick == "scissors" | userpick == "scissors" & comppick == "paper"){
            setWinstatus("YOU WIN")
            if (score >= -1){
                let addscore = score + 1 == -1 ? 0 : score + 1
                setScore(addscore)   
                }
        }
        return () => {
            
        };
    }, [comppick,userpick]);

  return (
    <section className={results.maincontainer}>
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
