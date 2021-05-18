import React, {useState, useEffect} from 'react';
import NavBar from "./navbar"
import {connect} from 'react-redux'


function wishList(props) {
  
/* useEffect(() => {

},[]) */

    return (
      <div className='backgroundWishlist'>
       <NavBar/>
       <div className='traitWishlist'></div>
      </div>
    
  
    
    );
  }
  
  export default wishList;