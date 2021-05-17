import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <div className= 'navbarHome'>
        <div>
          <h1 style={{marginLeft: '20px', marginTop: '70px'}}>DÉCODE.</h1> 
        </div>
        <div className= 'icon'>  
          <Link to = '/login'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
          <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
          <Link to = '/allpalettes'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
        </div>
      </div>
      <div className="imageBackground">
        <h3>DÉCOUVREZ L'INTÉRIEUR 
        DONT VOUS AVEZ TOUJOURS RÊVÉ</h3>
        {/* <img className='imageBackground' src="background.png" alt='image de fond'/> */}
      </div>
    </div>
  
  );
}

export default Home;
