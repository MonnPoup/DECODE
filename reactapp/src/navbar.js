
import React from 'react';






function NavBar() {
  return (
    <div className= 'navbar'>
    <h1 style={{marginLeft: '20px'}}>DÉCODE.</h1> 
    
    <div className= 'icon'>  
    <img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
    <img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
    <img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/>
    </div>
        

  </div>
  

  
  );
}

export default NavBar;
