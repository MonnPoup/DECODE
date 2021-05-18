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
        <div className="titreHome">
          <p className="pHome">DÉCOUVREZ L'INTÉRIEUR </p>
          <p className="pHome">DONT VOUS AVEZ TOUJOURS RÊVÉ</p>
        </div>
          <input type="submit" value="Je découvre" className='inputHome'/>
            <div className="paletteNoire"></div>
            <div className="paletteBrune"></div>
            <div className="paletteBleue"></div>
            <div className="paletteOr"></div>
            <div className="paletteBlanc"></div>
      </div>
    </div>
  
  );
}

export default Home;
