import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { connect } from "react-redux";

function MyPalette(props) {
  /* const[token, setToken] = useState(props.token)

 /*  useEffect(async()=> {
    
    if (token) {
    const data = await fetch(`/myPalette/:${token}`)
    const body = await data.json()}
    else {
      props.userPaletteFromStore
    }
   
    console.log('hello lucas',body);
  }) */
  var palette = props.userPaletteFromStore;
  if (palette !== '') {
    var tabPaletteColor = palette.colors.map((data, i) => {
      return (
        <div
          key={i}
          style={{ backgroundColor: data }}
          className="palette"
        >
          <p className="textColorPalette">{data}</p>
        </div>
      );
    });
  }

  var paletteName = props.userPaletteFromStore.name;
  if (paletteName == 'artDeco') {
    paletteName = 'Art Déco'
  } else if (paletteName == 'ethnique') {
    paletteName = 'Éthnique'
  } else if (paletteName == 'bohème') {
    paletteName = 'Bohème'
  } else if (paletteName == 'modernMinimal') {
    paletteName = 'Modern'
  }

  return (
    <div style={{ height: "110vh" }} className="background">
      <NavBar />
      <div className="containerMypalette">
        <h3 className="h3Mypalette">
          VOTRE PALETTE : {paletteName}
        </h3>
        <div className="traitMypalette"></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {tabPaletteColor}
        </div>
      </div>
      <p className="descriptionMypalette">
        {props.userPaletteFromStore.description}
      </p>
      <Link to="/shoppinglist">
        <button className="inputMypalette">Découvrir ma shopping-list</button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return { userPaletteFromStore: state.palette, token: state.token };
}

export default connect(mapStateToProps, null)(MyPalette);
