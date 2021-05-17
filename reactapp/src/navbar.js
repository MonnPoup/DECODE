
import React from 'react';
import './App.css';
import {BrowserRouter as Link} from 'react-router-dom';



function NavBar() {
  
  return (
    <div className= 'navbar'>
    <div><h2 style={{marginLeft: '20px'}}>DÉCODE.</h2> </div>
    <div className= 'icon'>  
    <Link to = '/login'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
    <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
    <Link to = '/allpalettes'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
    </div>
    </div>
  

  
  );
}

export default NavBar;
