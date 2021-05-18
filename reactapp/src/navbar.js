
import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Popover, Button } from 'antd';





function NavBar() {
  
  return (
    <div className= 'navbarNormal'>
        <div>
          <Link style={{textDecoration:"none", color:"#203126"}} to ="/">
          <h2 style={{marginLeft: '20px'}}>DÉCODE.</h2> 
          </Link>
        </div>
      <div className= 'icon'>  
        <Link to = '/allpalettes'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
        <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
        <Link to = '/login'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
      </div>
    </div>
  

  
  );
}

export default NavBar;
