
import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { Popover } from 'antd';





function NavBar(props) {

  const text = <span>Mon compte</span>;
          const content = (
            <div>
              <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/mypalette'><p>Ma palette</p></Link>
              <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/'><p onClick={() => props.suppressionToken()}>Déconnexion</p></Link>
            </div>
          );

  if(props.userToken != null){
    var userNav = <Popover placement="bottomRight" title={text} content={content} trigger="click">
    <img src='user.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
    </Popover>
} else {
    userNav =  <Link to='/login'><img src='user.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
}
  
  return (
    <div className= 'navbarNormal'>
        <div>
          <Link style={{textDecoration:"none"}} to ="/">
          <h2 style={{marginLeft: '20px', color:'#203126', marginTop: '20px', fontSize: '50px'}}>DÉCODE.</h2> 
          </Link>
        </div>
      <div className= 'icon'>  
        <Link to = '/allpalettes'><img src='palette.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
        <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
        {userNav}
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
