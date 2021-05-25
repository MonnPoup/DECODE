import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import {connect} from 'react-redux';
import { Popover } from 'antd';
import Texty from 'rc-texty';


function Home(props) {

  const text = <span>Bonjour {props.userNameFromStore}</span>;
  const content = (
    <div>
      <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/mypalette'><p>Ma palette</p></Link>
      <Link style={{color: 'grey', textDecoration: 'underline grey'}} to ='/shoppinglist'><p>Ma shopping list</p></Link>
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
            <h1  type='alpha' duration='150' mode="random" 
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
      <div id="section1" className="imageBackground" style={{display:'flex', justifyContent:'center'}}>
      <div  className="titreHomeSection1" style={{width: '50vw', display:'flex', textAlign:'center', justifyContent:'center'}}>
          <Texty className='pHome'>DÉCOUVREZ L'INTÉRIEUR DONT VOUS AVEZ TOUJOURS RÊVÉ</Texty>
        </div>
        <a href="#section2">
          <div type="button" className="ButtonHome1" style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
           <p style={{marginTop:'1em'}}> Je découvre</p> 
          </div>
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
        <div className="titreHomeSection2" style={{display: 'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
          <p className="pHome1">
            DÉCODE vous offre des conseils de décoration personnalisés et
            gratuits afin de vous aider dans la décoration de votre intérieur.
          </p>
          <p className="pHome1">
            Répondez au questionnaire pour découvrir votre palette de couleurs et accéder à
            votre shopping list sur-mesure !
          </p>
        </div>
        <Link to="/quiz">
          <button type="button" className="ButtonHome2">
            Répondre au questionnaire
          </button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {userToken: state.token, userNameFromStore: state.userName};
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
