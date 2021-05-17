import React from 'react';
import App from './App.css'; 





function Quizz() {


    return (
        <div> 
         <div className= 'navbar'>
        <h1 style={{marginLeft: '30px'}}>DÉCODE.</h1> 
    
        <div className= 'icon'>  
        <img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
        <img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
        <img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/>
        </div>

        </div>

        <div style={{backgroundColor: '#203126', marginTop:'120px', height:'100vh', width:'100vw', justifyContent:'center'}}> 
            <p  className='questions'> Parmis les styles de décoration suivants lesquels préférez-vous ? </p>

            <div className= 'questionsPhoto' style={{display:'flex', justifyContent:'center'}} >  
            <img src='image35.png' alt='ethnique' style={{width: '300px', margin: '20px'}}/>
            <img src='image36.png' alt='boho' style={{width: '300px', margin: '20px'}}/>
            <img src='image37.png' alt='artdeco' style={{width: '300px', margin: '20px'}}/>
            <img src='image38.png' alt='minimal' style={{width: '300px', margin: '20px'}}/>
            </div>

            <div className="ProgressBar" style={{ height:"20px", display:'flex', justifyContent:'center'}} > 
                <div style={{borderBottom:'1px solid #FCFBF6', width:'60px'}}> </div>
             </div>
            <div className= 'quizzButton' style={{display:'flex', justifyContent:'center'}}> 
            <img src='arrow-left.png' alt='arrow left' style={{width: '40px', margin: '30px'}}/>
            <img src='arrow-right.png' alt='arrow left' style={{width: '40px', margin: '30px'}}/>
            </div>
        </div>
     </div>
    );
  }
  
  export default Quizz;