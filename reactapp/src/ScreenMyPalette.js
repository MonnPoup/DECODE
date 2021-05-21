import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { connect } from "react-redux";

function MyPalette(props) {
  const [palette, setPalette] = useState(props.userPaletteFromStore);
  const [token, setToken] = useState(props.token)
  const [isConnected, setisConnected] = useState(false)


  useEffect(() => {
    setPalette(props.userPaletteFromStore);
  }, [props.userPaletteFromStore]);
 

  useEffect(() => {
    console.log('token', token)

    if (token !== null){
      setisConnected(true)
    async function fetchData() {
        console.log('condition remplie')
        const data = await fetch("/myPalette", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `token=${token}`,
        });

        var body = await data.json();
        console.log("body pr palette", body);
        setPalette(body.userPalette);
    }
    fetchData();
  } 
  else if (isConnected === false) {
   console.log('userpasconnecté');
   console.log('props from reducer', palette)
  } 
    
  }, []);

 

 console.log('token IS HERE ', props.token)

   if (palette) {

    var paletteName = palette.name;
  if (paletteName === "artDeco") {
    paletteName = "Art Déco";
  } else if (paletteName === "ethnique") {
    paletteName = "Éthnique";
  } else if (paletteName === "bohème") {
    paletteName = "Bohème";
  } else if (paletteName === "modernMinimal") {
    paletteName = "Modern Minimal";
  }  
  
    var tabPaletteColor = palette.colors.map((data, i) => {
      return (
        <div key={i} style={{ backgroundColor: data }} className="palette">
          <p className="textColorPalette">{data}</p>
        </div>
      );
    });

     return (
    <div style={{ height: "110vh" }} className="background">
      <NavBar />
        <div className="containerMypalette">
        <h3 className="h3Mypalette">VOTRE PALETTE :  {paletteName} </h3>
        <div className="traitMypalette"></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
           {tabPaletteColor}  
        </div>
      </div>
      <p className="descriptionMypalette">{palette.description}</p>
      <Link to="/shoppinglist">
        <button className="inputMypalette">Découvrir ma shopping-list</button>
      </Link>  
    </div>
  );
    //Attente réponse enregistrement dans le store
  }  else {return (
    <div style={{ height: "110vh" }} className="background">
      <NavBar />
        <div className="containerMypalette">
        <h3 className="h3Mypalette">VOTRE PALETTE : </h3>
        <div className="traitMypalette"></div>
        <div style={{ display: "flex", flexDirection: "row" }}> 
        </div>
      </div>
      <p className="descriptionMypalette"></p>
      <Link to="/shoppinglist">
        <button className="inputMypalette">Découvrir ma shopping-list</button>
      </Link>  
    </div>
  ); }
 
  
}


function mapStateToProps(state) {
  return { userPaletteFromStore: state.palette, token: state.token };
}
function mapDispatchToProps(dispatch){
  return {
    addPalette: function(palette){
      dispatch({type: 'addToken', palette: palette})
    }, 
  }
}

export default connect(mapStateToProps, null)(MyPalette);
