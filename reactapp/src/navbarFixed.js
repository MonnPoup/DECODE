import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Popover } from 'antd';
import './App.css';
import { Badge } from 'antd';




function NavbarFixed(props) {

const text = <span>Bonjour {props.userNameFromStore}</span>;
const content = (
  <div>
    <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/mypalette'><p>Ma palette</p></Link>
    <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/'><p onClick={() => {props.suppressionToken(); props.deleteWishlist()}}>Déconnexion</p></Link>
  </div>
);
if(props.token != null){
var userNav = <Popover placement="bottomRight" title={text} content={content} trigger="click">
<img src='user.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/>
</Popover>
} else {
userNav =  <Link to='/login'><img src='user.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
}

var count = props.wishlist.length
console.log('count', count)

    return (
      <div className= 'navbarNormalFixe'>
       <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
          <Link style={{textDecoration:"none"}} to ="/">
          <h2 style={{margin: '0px 0px 0px 20px', color:'#203126', fontSize: '50px'}}>DÉCODE.</h2> 
           </Link> 
        </div>
      <div className= 'icon'>  
        <Link to = '/allpalettes'><img src='palette.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
        <div style={{margin:'20px'}}> 
          <Badge count={count} style={{backgroundColor:'#A7430A', }}>
            <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px'}}/></Link>
          </Badge>
       </div>
        {userNav}
      </div>
    </div>
    );
  }
  
  

  function mapStateToProps(state){
    return {token: state.token, userNameFromStore: state.userName,  wishlist: state.wishlist};
    }
    
    function mapDispatchToProps(dispatch){
      return {
        suppressionToken: function(){
            dispatch({type: 'deconnexion'})
        },
        deleteWishlist : function(){
          dispatch({type: 'deleteWishlist'}) 
        }
      }
    }
    
    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(NavbarFixed)