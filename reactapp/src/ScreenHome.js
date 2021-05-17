import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="mycontainer">
      <div className= 'navbarHome'>
        <div>
          <h1 style={{marginLeft: '20px', marginTop: '70px', fontSize: "70px"}}>DÉCODE.</h1> 
        </div>
        <div className= 'icon'>  
          <Link to = '/login'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
          <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
          <Link to = '/allpalettes'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
        </div>
      </div>
      <div className="imageBackground">
        <div className="h3home">
          <h3 >DÉCOUVREZ L'INTÉRIEUR </h3>
          <h3>DONT VOUS AVEZ TOUJOURS RÊVÉ</h3>
        </div>
      </div>
    </div>
  
  );
}

export default Home;
