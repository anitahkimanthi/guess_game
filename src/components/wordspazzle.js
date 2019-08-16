import React from 'react'
import '../assets/css/main.css'

const Pazzle = (props) =>{

    
        return(
            <div className = "pazzle-wrapper">
                <div className = "guess">
                    <button  className = "word" value="G" data-id="1" onClick={props.handleClicked}>G</button>
                    <button  className = "word" value="S" onClick={props.handleClicked}>S</button>
                    <button  className = "word" value="L" onClick={props.handleClicked}>L</button>
                    <button  className = "word" value="O" onClick={props.handleClicked}>O</button>
                    <button  className = "word" value="W"  onClick={props.handleClicked}>W</button>
                </div>
                <div className = "guess">
                    <button  className = "word" value="P" onClick={props.handleClicked}>P</button>
                    <button  className = "word" value="A" onClick={props.handleClicked}>A</button>
                    <button  className = "word" value="I" onClick={props.handleClicked}>I</button>
                    <button  className = "word" value="D" onClick={props.handleClicked}>D</button>
                    <button  className = "word" value="M" onClick={props.handleClicked}>M</button>
                </div>
                <div className = "guess">
                    <button  className = "word" value="F" onClick={props.handleClicked}>F</button>
                    <button  className = "word" value="A" onClick={props.handleClicked}>A</button>
                    <button  className = "word" value="M" onClick={props.handleClicked}>M</button>
                    <button  className = "word" value="e" onClick={props.handleClicked}>E</button>
                    <button  className = "word" value="I" onClick={props.handleClicked}>I</button>
                </div>
                <div className = "guess">
                    <button  className = "word" value="I" onClick={props.handleClicked}>I</button>
                    <button  className = "word" value="L" onClick={props.handleClicked}>L</button>
                    <button  className = "word" value="E" onClick={props.handleClicked}>E</button>
                    <button  className = "word" value="E" onClick={props.handleClicked}>E</button>
                    <button  className = "word" value="N" onClick={props.handleClicked}>N</button>
                </div>
                <div className = "guess">
                    <button  className = "word" value="R" onClick={props.handleClicked}>R</button>
                    <button  className = "word" value="T" onClick={props.handleClicked}>T</button>
                    <button  className = "word" value="E" onClick={props.handleClicked}>E</button>
                    <button  className = "word" value="R" onClick={props.handleClicked}>R</button>
                    <button  className = "word" value="M" onClick={props.handleClicked}>M</button>
                </div>
            </div>
        )
    }

export default Pazzle;