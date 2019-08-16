import React, {Component} from 'react';
import '../assets/css/main.css'
import WordPazzle from './wordspazzle';
import Boxes from './word-boxes'

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputLetter : "",
            blank : 'please type in the word to play',
            error : "you can only enter one letter in each box",
            selected:[],
            answers: {
                    "0":{
                        "word":"paid"
                    },
                    "1":{
                        "word":"fame"
                    },
                    "2":{
                        "word":"lime"
                    }, 
                    "3":{
                        "word":"slow"
                    },
                   " 4":{
                       "word":"deer"
                    }, 
                    "5":{
                        "word":"term"
                    },
                    "6":{
                        "word":"meet"
                    },
                    "7":{
                        "word":"leen"
                    },
                    "8":{
                        "word":"game"
                    }
                },
        }

        
    }
    

    handleWord = (event,name,prop) =>{
        const {inputLetter,answers} = this.state

        for(var i = 0; i < answers.length; i++){
            if(answers[1].word === name){
                return answers[i][prop] || "no such word"
            }
        }
        this.setState({
            inputLetter : event.target.value
        });

        console.log(inputLetter)
    }  

    handleSubmit =() =>{
        const {inputLetter,answers} = this.state
        if(inputLetter !== answers[1].word){
            return "do not match"
        }else{
            console.log(inputLetter)
        }
        // console.log("hey")
       
    }
    

    handleClicked =(event) => {
      this.setState({
        inputLetter:event.target.value
      })
     }
    render(){
        const {blank} = this.state

        return(
            <div className = "main">
            <WordPazzle  handleClicked = {this.handleClicked} />
           
            <br/>
            <Boxes handleWord ={this.handleWord} blank={blank} handleSubmit={this.handleSubmit}/>
            <p>{this.state.inputLetter}</p>
            </div>
            
        )
    }
}

export default Main;