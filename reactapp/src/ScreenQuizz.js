import React, {useState, useEffect} from 'react';
import { Link, Redirect} from "react-router-dom";
import NavBar from "./navbar"
import App from './App.css'; 


function Quizz() {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)
  const [answer, setAnswer ] = useState()
  const [answersArray, setAnswersArray] = useState([])
  const [isPhoto1Selected, set_isPhoto1Selected] = useState(false)
  const [isPhoto2Selected, set_isPhoto2Selected] = useState(false)
  const [isPhoto3Selected, set_isPhoto3Selected] = useState(false)
  const [isPhoto4Selected, set_isPhoto4Selected] = useState(false)
  const [error, setError] = useState('')
  

  var dataQuestions = [
      {question : 'Première question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
        {question : 'Deuxième question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
        {question : 'Troisième question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
        {question : 'Quatrième question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
       photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        }, 
        {question : 'Cinquième question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
        {question : 'Sixième question', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
        { question: 'Septième question',
            photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'boheme'},
        photo4: {
            url: 'image38.png',
            name: 'minimalModern'}
        },
  ]

  
  var currentQuestion = dataQuestions[clickCount]
 

    var  handleClickIncreaseWidth = () => {
        if (isPhoto1Selected === true || isPhoto2Selected === true || isPhoto3Selected === true || isPhoto3Selected === true ) {
        if (answersArray[clickCount] === undefined ){        // si premier clic 
        var copy = answersArray 
        copy.push(answer)}
        else if (answersArray[clickCount]) {                // si revient en arrière modifie la valeur 
            answersArray[clickCount] = answer 
        }
        console.log(answersArray)
        setCount(clickCount+1)
        setProgressBarWidth(progressBarWidth+185)           //  barre de progression    
        set_isPhoto1Selected(false); set_isPhoto2Selected(false);set_isPhoto3Selected(false);set_isPhoto4Selected(false)
        setError('')
    } else  { setError('Merci de sélectionner une réponse') }
}

    var handleClickDecreaseWidth = () => {
        setProgressBarWidth(progressBarWidth-185)
        if (clickCount !== 0 ) {
            setCount(clickCount-1)} 
    } 

    var handleClickValider = async () => {
        console.log('click valider')
        var copy = answersArray 
    
        copy.push(answer)

        await fetch('/myPalette', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `rep1=${copy[0]}&rep2=${copy[1]}&rep3=${copy[2]}&rep4=${copy[3]}&rep5=${copy[4]}&rep6=${copy[5]}&rep7=${copy[6]}`
        });
        console.log('fetch done')
}

    var clickPhoto1 = async () => {
        if (isPhoto1Selected === false){
            set_isPhoto1Selected(true)
            set_isPhoto2Selected(false)
            set_isPhoto3Selected(false)
            set_isPhoto4Selected(false)

        } else {
            set_isPhoto1Selected(false)
        }
    }
    if (isPhoto1Selected === true) {
        var selectBorder1 = '2px solid white'
    }

    var clickPhoto2 = async () => {
        if (isPhoto2Selected === false){
            set_isPhoto2Selected(true)
            set_isPhoto1Selected(false)
            set_isPhoto3Selected(false)
            set_isPhoto4Selected(false)
        } else {
            set_isPhoto2Selected(false)
        }
    }
    if (isPhoto2Selected === true) {
        var selectBorder2 = '2px solid white'
    }

    var clickPhoto3 = async () => {
        if (isPhoto3Selected === false){
            set_isPhoto3Selected(true)
            set_isPhoto2Selected(false)
            set_isPhoto1Selected(false)
            set_isPhoto4Selected(false)
        } else {
            set_isPhoto3Selected(false)
        }
    }
    if (isPhoto3Selected === true) {
        var selectBorder3 = '2px solid white'
    }

    var clickPhoto4 = async () => {
        if (isPhoto4Selected === false){
            set_isPhoto4Selected(true)
            set_isPhoto2Selected(false)
            set_isPhoto3Selected(false)
            set_isPhoto1Selected(false)
        } else {
            set_isPhoto4Selected(false)
        }
    }
    if (isPhoto4Selected === true) {
        var selectBorder4 = '2px solid white'
    }



    var buttons = 
    <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img   className='arrow-button' src='arrow-left.png' alt='arrow left' onClick={() => handleClickDecreaseWidth()}/>
    <img  className='arrow-button' src='arrow-right.png' alt='arrow right' onClick={() => handleClickIncreaseWidth()}/>
    </div>; 

    if (clickCount === 6 ) {  
    buttons = 
    <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img src='arrow-left.png' alt='arrow left'  className='arrow-button' onClick={() => handleClickDecreaseWidth()}/>
    <Link to='/mypalette'><button type='button' className='ButtonQuestionnaire' onClick={() => {handleClickValider()}}> Valider</button></Link>
    </div> } 

    else if (clickCount === 0) {
    buttons = 
    <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img className="arrow-button" src='arrow-right.png' alt='arrow left' 
    onClick={() => handleClickIncreaseWidth()}/>
    </div>; }
  

    return (
        <div> 
          <NavBar/>
        <div style={{backgroundColor: '#203126', height:'85vh', width:'100vw', justifyContent:'center'}}> 
            <div className='ScreenQuestion'> 
            <p  className='questions'> {currentQuestion.question} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center', height:'65vh'}} >  
            <img className='photo' src={currentQuestion.photo1.url} alt='ethnique'   style={{border: selectBorder1}} onClick={()=> {setAnswer('ethnique'); clickPhoto1()}} / >
            <img className='photo' src={currentQuestion.photo2.url} alt='boho'   style={{border: selectBorder2}} onClick={()=> {setAnswer('boho');clickPhoto2()}}/>
            <img className='photo' src={currentQuestion.photo3.url} alt='artdeco' style={{border: selectBorder3}} onClick={()=> {setAnswer('artDeco');clickPhoto3()}}/>
            <img className='photo' src={currentQuestion.photo4.url} alt='minimal' style={{border: selectBorder4}} onClick={()=> {setAnswer('minimal');clickPhoto4()}}/>
            </div>

            <div className="ProgressBar" style={{ height:"3vh", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
               
            </div>
            <p className="ErrorQuiz"> {error}</p> 
            {buttons}
            
            
            </div>
        </div>
     </div> 

    )
  }
  
  export default Quizz;