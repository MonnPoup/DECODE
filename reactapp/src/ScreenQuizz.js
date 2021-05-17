import React from 'react';
import App from './App.css'; 





function Quizz() {


    return (
        <div> 
         <div className= 'navbar'>
    <h1 style={{marginLeft: '20px'}}>DÉCODE.</h1> 
    
    <div className= 'icon'>  
    <img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
    <img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
    <img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/>
    </div>
        

  </div>

        <div style={{backgroundColor: '#203126', marginTop:'120px', height:'100vh', width:'100%'}}> 
            <p style={{color:'white', fontSize:'36px'}}> Parmis les styles de décoration suivants lesquels préférez-vous ? </p>
        </div>
     </div>
    );
  }
  
  export default Quizz;