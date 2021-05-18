import { Button } from 'antd';
import React, {useState, useEffect} from 'react';

import App from './App.css'; 


function Quizz() {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)


  var dataQuestions = [
      {question : 'Première question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
        {question : 'Deuxième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
        {question : 'Troisième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
        {question : 'Quatrième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'}, 
        {question : 'Cinquième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
        {question : 'Sixième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
        {question : 'Septième question', 
        photo1: 'image35.png',
        photo2: 'image36.png',
        photo3: 'image37.png',
        photo4: 'image38.png'},
  ]

  
  var currentQuestion = dataQuestions[clickCount]
 

    var  handleClickIncreaseWidth = () => {
        console.log('click')
        setProgressBarWidth(progressBarWidth+185)
        if (clickCount < 6 ) {
        setCount(clickCount+1)}
    }

    var handleClickDecreaseWidth = () => {
        setProgressBarWidth(progressBarWidth-185)
        if (clickCount !== 0 ) {
            setCount(clickCount-1)}
        
    } 

    if (clickCount !== 6 ) { 
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
        <div style={{backgroundColor: '#203126', height:'100vh', width:'100vw', justifyContent:'center'}}> 
            <div className='ScreenQuestion'> 
            <p  className='questions'> {currentQuestion.question} {clickCount} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center'}} >  
            <img src={currentQuestion.photo1} alt='ethnique' style={{width: '300px', margin: '20px'}}/>
            <img src={currentQuestion.photo2} alt='boho' style={{width: '300px', margin: '20px'}}/>
            <img src={currentQuestion.photo3} alt='artdeco' style={{width: '300px', margin: '20px'}}/>
            <img src={currentQuestion.photo4} alt='minimal' style={{width: '300px', margin: '20px'}}/>
            </div>

            <div className="ProgressBar" style={{ height:"20px", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
            </div>

        
            <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
            <img src='arrow-left.png' alt='arrow left' style={{width: '40px', margin: '30px'}} 
            onClick={() => handleClickDecreaseWidth()}/>
            <img src='arrow-right.png' alt='arrow left' style={{width: '40px', margin: '30px'}}
            onClick={() => handleClickIncreaseWidth()}/>
            </div>
            
            </div>
        </div>
     </div> 

    )} 
    else { 
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
            <div style={{backgroundColor: '#203126', height:'100vh', width:'100vw', justifyContent:'center'}}> 
                <div className='ScreenQuestion'> 
                <p  className='questions'> {currentQuestion.question} {clickCount} </p>
    
                <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center'}} >  
                <img src={currentQuestion.photo1} alt='ethnique' style={{width: '300px', margin: '20px'}}/>
                <img src={currentQuestion.photo2} alt='boho' style={{width: '300px', margin: '20px'}}/>
                <img src={currentQuestion.photo3} alt='artdeco' style={{width: '300px', margin: '20px'}}/>
                <img src={currentQuestion.photo4} alt='minimal' style={{width: '300px', margin: '20px'}}/>
                </div>
    
                <div className="ProgressBar" style={{ height:"20px", display:'flex', justifyContent:'center'}} > 
                    <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
                </div>
    
            
                <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
                <img src='arrow-left.png' alt='arrow left' style={{width: '40px', margin: '30px'}} 
                onClick={() => handleClickDecreaseWidth()}/>
               <input type="submit" value="Valider"  style={{ margin: '30px'}} className='ButtonQuestionnaire'/> 
                </div>
                
                </div>
            </div>
         </div> 
        )}
  }
  
  export default Quizz;