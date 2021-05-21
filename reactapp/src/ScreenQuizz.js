import React, {useState, } from 'react';
import {Redirect} from "react-router-dom";
import NavBar from "./navbar";
import {connect} from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';
import { OmitProps } from 'antd/lib/transfer/ListBody';



function Quiz(props) {
  const [progressBarWidth, setProgressBarWidth] = useState(185)
  const [clickCount, setCount] = useState(0)
  const [answer, setAnswer ] = useState()
  const [answersArray, setAnswersArray] = useState([])
  const [isPhoto1Selected, set_isPhoto1Selected] = useState(false)
  const [isPhoto2Selected, set_isPhoto2Selected] = useState(false)
  const [isPhoto3Selected, set_isPhoto3Selected] = useState(false)
  const [isPhoto4Selected, set_isPhoto4Selected] = useState(false)
  const [error, setError] = useState('')
  const [buttonValider, setButtonValider] = useState(false)
  

  var dataQuestions = [
      {question : 'Parmi ces matériaux et tissus, lequel préférez-vous ?', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
        {question : 'Préférez-vous une décoration...', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
        {question : 'Parmi les styles de décorations suivants, lequel préférez-vous ?', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
        {question : 'Parmi les associations de couleurs suivantes, lesquelles préférez-vous pour votre intérieur ?', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
       photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        }, 
        {question : 'Vous cherchez un nouveau meuble. Vous allez...', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
        {question : 'Vous devez choisir un nouveau canapé. Vous choisissez...', 
        photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
        { question: 'Quel est le revêtement idéal pour le salon selon vous ?',
            photo1: {
            url: 'image35.png', 
            name: 'ethnique'},
        photo2:{
            url: 'image36.png',
            name: 'artDeco'},
        photo3: {
            url: 'image37.png',
            name: 'bohème'},
        photo4: {
            url: 'image38.png',
            name: 'modernMinimal'}
        },
  ]

  
  var currentQuestion = dataQuestions[clickCount]
 

    var  handleClickIncreaseWidth = () => {
        if (isPhoto1Selected === true || isPhoto2Selected === true || isPhoto3Selected === true || isPhoto4Selected === true ) {
        if (answersArray[clickCount] === undefined ){        // si premier clic 
        var copy = answersArray 
        copy.push(answer)}
        else if (answersArray[clickCount]) {                // si revient en arrière modifie la valeur 
            answersArray[clickCount] = answer 
        }
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
            setError('')
    } 

    var handleClickValider = async () => {
        if (isPhoto1Selected === true || isPhoto2Selected === true || isPhoto3Selected === true || isPhoto4Selected === true ) {
            console.log('condition remplie')
            var copy = answersArray 
            copy.push(answer)
            setButtonValider(true)
            console.log('valider : ', copy)
            const data = await fetch('/validerQuiz', {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `rep1=${copy[0]}&rep2=${copy[1]}&rep3=${copy[2]}&rep4=${copy[3]}&rep5=${copy[4]}&rep6=${copy[5]}&rep7=${copy[6]}&token=${props.userToken}` 
            });
            const body = await data.json()

            console.log('post fetch', body)
            console.log("props to reducer", props)

            props.addPalette(body.userPalette)
            console.log('add to ', body.userPalette)


           

        } else  { setError('Merci de sélectionner une réponse') } 
      
    }

    if (buttonValider === true) {return <Redirect to='/mypalette' />}

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
        var borderRadius = '75%'
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
    <button type='button' className='ButtonQuestionnaire' onClick={() => {handleClickValider()}}> Valider</button>
    </div> } 

    else if (clickCount === 0) {
    buttons = 
    <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
    <img className="arrow-button" src='arrow-right.png' alt='arrow left' 
    onClick={() => handleClickIncreaseWidth()}/>
    </div>; }

  if (error !== null) {
    <p className="ErrorQuiz"> {error}</p> 
} else {
   <div style={{height:"50vh"}}></div>
}

    return (
        <div className='background'> 
          <NavBar/>
            <div className='ScreenQuestion'> 
            <p  className='questions'> {currentQuestion.question} </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center', height:'65vh'}} >  
            <img className='photo' src={currentQuestion.photo1.url} alt='ethnique'   style={{selectBorder1}} onClick={()=> {setAnswer('ethnique'); clickPhoto1()}} />
            <img className='photo' src={currentQuestion.photo2.url} alt='bohème'   style={{border: selectBorder2}} onClick={()=> {setAnswer('bohème');clickPhoto2()}}/>
            <img className='photo' src={currentQuestion.photo3.url} alt='artDeco' style={{border: selectBorder3}} onClick={()=> {setAnswer('artDeco');clickPhoto3()}}/>
            <img className='photo' src={currentQuestion.photo4.url} alt='modernMinimal' style={{border: selectBorder4, borderRadius: borderRadius}} onClick={()=> {setAnswer('modernMinimal');clickPhoto4()}}/>
            </div>

            <div className="ProgressBar" style={{ height:"3vh", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:`${progressBarWidth}px`}}> </div>
               
            </div>
            <p className="ErrorQuiz"> {error}</p> 
            {buttons}
            </div>
       
     </div> 

    );
  }


  function mapStateToProps(state)
   {  return {userPaletteFromStore: state.palette, userToken: state.token}
  }

  
  function mapDispatchToProps(dispatch){
    return {
       
      addPalette: function(palette){
        console.log('page quizz to store: ', palette)
        dispatch({type: 'addPalette', palette: palette})
      }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Quiz)
