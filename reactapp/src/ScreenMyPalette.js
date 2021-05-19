import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import {connect} from 'react-redux';



function mypalette(props) {

  return (
    <div style ={{height:"110vh"}} className="background">
      <NavBar />
      <div className="containerMypalette">
        <h3 className="h3Mypalette">VOTRE PALETTE</h3>
        <div className="traitMypalette"></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="palette1"></div>
          <div className="palette2"></div>
          <div className="palette3"></div>
          <div className="palette4"></div>
          <div className="palette5"></div>
        </div>
      </div>
        <p className="descriptionMypalette">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
    <Link to="/shoppinglist"><button className="inputMypalette">Découvrir ma shopping-list</button></Link>
    </div>
  );
}

function mapStateToProps(state){
  return {userPaletteFromStore: state.palette}
}

  

export default connect(
  mapStateToProps,
  null
)(mypalette)
