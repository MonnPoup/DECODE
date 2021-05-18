import React, {useState, useEffect} from 'react';
import App from './App.css'; 


function Quizz() {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)
  const [questionData, setQuestionData] = useState()

  var dataQuestions = [
      {question : 'Première question', 
        photo1: 'url1',
        photo2: 'url2',
        photo3: 'url3',
        photo4: 'url4'},
        {question : 'Deuxième question', 
        photo1: 'url1',
        photo2: 'url2',
        photo3: 'url3',
        photo4: 'url4',},
        {question : 'Troisième question', 
        photo1: 'url1',
        photo2: 'url2',
        photo3: 'url3',
        photo4: 'url4',},
        {question : 'Quatrième question', 
        photo1: 'url1',
        photo2: 'url2',
        photo3: 'url3',
        photo4: 'url4',}
  ]

  useEffect(()=>{
    setQuestionData(dataQuestions[clickCount])

  }, [clickCount])

    var  handleClickIncreaseWidth = () => {
        console.log('click')
        setProgressBarWidth(progressBarWidth+185)

    }

    var handleClickDecreaseWidth = () => {
        setProgressBarWidth(progressBarWidth-185)
    } 

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

        questionData.map((data, i) { 
            <div className='ScreenQuestion'> 
            <p  className='questions'> {data.question} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center'}} >  
            <img src='image35.png' alt='ethnique' style={{width: '300px', margin: '20px'}}/>
            <img src='image36.png' alt='boho' style={{width: '300px', margin: '20px'}}/>
            <img src='image37.png' alt='artdeco' style={{width: '300px', margin: '20px'}}/>
            <img src='image38.png' alt='minimal' style={{width: '300px', margin: '20px'}}/>
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
            })
        </div>
     </div>

    );
  }
  
  export default Quizz;