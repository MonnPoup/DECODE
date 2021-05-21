import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import {connect} from 'react-redux';
import { Popover } from 'antd';


function Home(props) {

  const text = <span>Mon compte</span>;
  const content = (
    <div>
      <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/mypalette'><p>Ma palette</p></Link>
      <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/'><p onClick={() => props.suppressionToken()}>Déconnexion</p></Link>
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
    <div className="mycontainer" style={{ scrollBehavior: "smooth" }}>
      <div className="navbarHome">
        <div>
          <Link style={{textDecoration:"none"}} to="/">
            <h1
              style={{
                marginLeft: "20px",
                marginTop: "50px",
                fontSize: "70px",
                color:"#203126"
              }}
            >
              DÉCODE.
            </h1>
          </Link>
        </div>
        <div className="icon">
          <Link to="/allpalettes">
            <img
              src="palette.svg"
              alt="user icon"
              style={{ width: "30px", margin: "20px" }}
            />
          </Link>
          <Link to="/wishlist">
            <img
              src="heart.svg"
              alt="heart icon"
              style={{ width: "30px", margin: "20px" }}
            />
          </Link>
          {popover}
        </div>
      </div>
      <div id="section1" className="imageBackground">
        <div  className="titreHomeSection1">
          <p className="pHome">DÉCOUVREZ L'INTÉRIEUR </p>
          <p className="pHome">DONT VOUS AVEZ TOUJOURS RÊVÉ</p>
        </div>
        <a href="#section2">
          <button type="button" className="inputHome1">
            Je découvre
          </button>
        </a>
        <div className="paletteNoire"></div>
        <div className="paletteBrune"></div>
        <div className="paletteBleue"></div>
        <div className="paletteOr"></div>
        <div className="paletteBlanc"></div>
        <a href="#section2">
          <img
            className="chevronBlanc"
            src="doubleChevron.svg"
            alt="double chevron"
          />
        </a>
      </div>
      <div id="section2" className="background">
        <a href="#section1" >
          
          <img
            className="chevronBlanc2"
            src="doubleChevron.svg"
            alt="double chevron"
          />
        </a>
        <div className="titreHomeSection2">
          <p className="pHome1">
            DÉCODE vous offre des conseils de décoration personnalisés et
            gratuits.
          </p>
          <p className="pHome1">
            Répondez au questionnaire pour dévouvrir votre palette et accéder à
            la shopping list !
          </p>
        </div>
        <Link to="/quiz">
          <button type="button" className="inputHome2">
            Faire le questionnaire
          </button>
        </Link>
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
  )(Home)
