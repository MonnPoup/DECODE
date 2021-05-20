import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { connect } from "react-redux";


function MyPalette(props) {

  const [paletteFromBdd, setPaletteFromBdd] = useState ([]);

  useEffect( async ()=> {
    const data = await fetch('/myPalette', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `token=${props.token}` 
  });
   var body = await data.json()
   console.log('body', body)
   setPaletteFromBdd(body.userPalette[0])
    console.log('état palette', paletteFromBdd)
}, [])

  return (
    <div style ={{height:"110vh"}} className="background">
  <NavBar />
  <div className="containerMypalette">
    <h3 className="h3Mypalette">VOTRE PALETTE : {paletteFromBdd.name}</h3>
    <div className="traitMypalette"></div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="palette1"></div>
      <div className="palette2"></div>
      <div className="palette3"></div>
      <div className="palette4"></div>
      <div className="palette5"></div>
    </div>
  </div>
    <p className="descriptionMypalette">{paletteFromBdd.description}</p>
<Link to="/shoppinglist"><button className="inputMypalette">Découvrir ma shopping-list</button></Link>
</div>
  );
}

function mapStateToProps(state){
  return {userPaletteFromStore: state.palette, token: state.token }
}


export default connect(
  mapStateToProps,
  null
)(MyPalette)
