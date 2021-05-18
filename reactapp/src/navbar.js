
import React, {useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { Popover, Button } from 'antd';





function NavBar(props) {

  const text = <span>Mon compte</span>;
          const content = (
            <div>
              <Link to ='/mypalette'><p>Ma palette</p></Link>
              <Link to ='/'><p onClick={() => props.suppressionToken()}>Déconnexion</p></Link>
            </div>
          );

  if(props.userToken != null){
    var popover = <Popover placement="bottomRight" title={text} content={content} trigger="click">
    <img src='user.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
    </Popover>
} else {
    popover =  <Link to='/login'><img src='user.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
}
  
  return (
    <div className= 'navbarNormal'>
        <div>
          <Link style={{textDecoration:"none"}} to ="/">
          <h2 style={{marginLeft: '20px', color:'#203126', marginTop: '20px'}}>DÉCODE.</h2> 
          </Link>
        </div>
      <div className= 'icon'>  
        <Link to = '/allpalettes'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
        <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
        {popover}
      </div>
    </div>
  

  
  );
}


function mapStateToProps(state){
return {userToken: state.token}
}

function mapDispatchToProps(dispatch){
  return {
    suppressionToken: function(){
        dispatch({type: 'deconnexion'})
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
