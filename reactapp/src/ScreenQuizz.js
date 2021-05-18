import React, {useState, useEffect} from 'react';
import App from './App.css'; 


function Quizz() {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)
  const [answer, setAnswer ] = useState()
  const [answersArray, setAnswersArray] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  

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
        { photo1: {
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
        var copy = answersArray 
        copy.push(answer)
       
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

       await fetch{ ('/myPalette') 
    }

    }

    var buttons = <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img src='arrow-left.png' alt='arrow left' style={{width: '40px', margin: '30px'}} 
    onClick={() => handleClickDecreaseWidth()}/>
    <img src='arrow-right.png' alt='arrow left' style={{width: '40px', margin: '30px'}}
    onClick={() => handleClickIncreaseWidth()}/>
    </div>; 

    if (clickCount === 6 ) {  buttons = <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img src='arrow-left.png' alt='arrow left' style={{width: '40px', margin: '30px'}} 
    onClick={() => handleClickDecreaseWidth()}/>
   <button  type='button' value="Valider"  style={{ margin: '30px'}} className='ButtonQuestionnaire' onClick={() => {handleClickValider()}}> Valider</button>
    </div>} 

  

    return (
        <div> 
         <div className= 'navbarNormal'>
        <h1 style={{marginLeft: '30px'}}>DÉCODE.</h1> 
    
        <div className= 'icon'>  
        <img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
        <img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
        <img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/>
        </div>

        </div>
        <div className='background' style={{justifyContent:'center'}}> 
            <div className='ScreenQuestion'> 
            <p  className='questions'> {currentQuestion.question} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center'}} >  
            <img key='1' src={currentQuestion.photo1.url} alt='ethnique'  style={{width: '300px', margin: '20px'}} onClick={()=> {setAnswer('ethnique')}} / >
            <img key='2' src={currentQuestion.photo2.url} alt='boho' style={{width: '300px', margin: '20px'}} onClick={()=> {setAnswer('boho')}}/>
            <img key='3' src={currentQuestion.photo3.url} alt='artdeco' style={{width: '300px', margin: '20px'}} onClick={()=> {setAnswer('artDeco')}}/>
            <img key='4' src={currentQuestion.photo4.url} alt='minimal' style={{width: '300px', margin: '20px'}} onClick={()=> {setAnswer('minimal')}}/>
            </div>

            <div className="ProgressBar" style={{ height:"20px", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
            </div>

            {buttons}
            
            
            </div>
        </div>
     </div> 

    )
  }
  
  export default Quizz;