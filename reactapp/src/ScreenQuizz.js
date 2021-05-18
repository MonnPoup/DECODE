import React, {useState, useEffect} from 'react';
import { Link, Redirect} from "react-router-dom";
import NavBar from "./navbar"
import App from './App.css'; 


function Quizz() {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)
  const [answer, setAnswer ] = useState()
  const [answersArray, setAnswersArray] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [border, setBorder] = useState(false)
  

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
        console.log('click')
        console.log(answer)
        if (answersArray[clickCount] === undefined ){
        var copy = answersArray 
        copy.push(answer)}
        else if (answersArray[clickCount]) { 
            answersArray[clickCount] = answer 
        }
        
        console.log('array', answersArray)
        setProgressBarWidth(progressBarWidth+185)
        if (clickCount < 6 ) {
        setCount(clickCount+1)
        
    }  
    }

    var handleClickDecreaseWidth = () => {
        setProgressBarWidth(progressBarWidth-185)
        if (clickCount !== 0 ) {
            setCount(clickCount-1)} 
    } 

    var handleClickValider = async () => {
        console.log(answer)
        var copy = answersArray 
        copy.push(answer)

       
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
  

  var clickPhoto = async () => {

    {setAnswer('minimal')}
    if (border === false){
        setBorder(true)
    } else {
        setBorder(false)
    }

}

if (border === true) {
    var border2 = '2px solid white'
}
  

    return (
        <div> 
          <NavBar/>
        <div style={{backgroundColor: '#203126', height:'85vh', width:'100vw', justifyContent:'center'}}> 
            <div className='ScreenQuestion'> 
            <p  className='questions'> {currentQuestion.question} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center', height:'65vh'}} >  
            <img className='photo' src={currentQuestion.photo1.url} alt='ethnique'   onClick={()=> {setAnswer('ethnique')}} / >
            <img className='photo' src={currentQuestion.photo2.url} alt='boho'  onClick={()=> {setAnswer('boho')}}/>
            <img className='photo' src={currentQuestion.photo3.url} alt='artdeco'  onClick={()=> {setAnswer('artDeco')}}/>
            <img className='photo' src={currentQuestion.photo4.url} alt='minimal' style={{border: border2}} onClick={()=> clickPhoto()}/>
            </div>

            <div className="ProgressBar" style={{ height:"3vh", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
            </div>

            {buttons}
            
            
            </div>
        </div>
     </div> 

    )
  }
  
  export default Quizz;