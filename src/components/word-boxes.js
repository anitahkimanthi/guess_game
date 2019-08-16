import React from 'react'

const Boxes = (props) => {
    

        return (
            <div className = "words-wrapper">
            <p>{props.blank}</p>

            <div className = "boxes">
                <input type="text" className = "box" value = {props.inputLetter} onChange ={props.handleWord}></input>
                <input type="text" className = "box" value = {props.inputLetter} onChange ={props.handleWord}></input>
                <input type="text" className = "box" value = {props.inputLetter} onChange ={props.handleWord}></input>
                <input type="text" className = "box" value = {props.inputLetter} onChange ={props.handleWord}></input>
            </div>
            <br/>
            {/* <button onSubmit={props.Submit}>SUBMIT</button> */}
            <div className ="test">
                <input type = "text" className = "test" onChange ={props.handleWord} value = {props.inputValue}></input>
                <br/>
                <button onClick={props.handleSubmit}>SUBMIT</button>
            </div>
            </div>
        )
    }

export default Boxes;