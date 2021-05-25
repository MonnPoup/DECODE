import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { connect } from "react-redux";
import copy from 'copy-to-clipboard';
import { Popover, Button, notification } from 'antd';
import { useCookies } from 'react-cookie'


function MyPalette(props) {
  const [palette, setPalette] = useState();
  const [token, setToken] = useState(props.token)
  const [isConnected, setisConnected] = useState(false)
  



  useEffect(() => {
    props.addPalette('')
    if (token !== null){
      setisConnected(true)
    async function fetchData() {
        const data = await fetch("/myPalette", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `token=${token}`,
        });

        var body = await data.json();
        setPalette(body.userPalette);
        props.addPalette(body.userPalette)
    }
    fetchData();
  } 
  else if (isConnected === false) {
  } 
    
  }, []);

  useEffect(() => {
    setPalette(props.userPaletteFromStore);
  }, [props.userPaletteFromStore]);
 
  
  var handleClickCopyCode = (data) => {

    copy(`${data}`, {
      debug: true,
      message: 'Press #{key} to copy',
    });
 
  }


  const openNotification = () => {
    notification.open({
      message: 'Code copié !',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });

    
  };
  
  const content = (
    <div>
      <p style={{fontSize:'12px', marginBottom: '0px'}}>Cliquez pour copier le code hex</p>
    </div>
  );

  if (palette) {
    var paletteName = palette.name;
      if (paletteName === "artDeco") {
        paletteName = "Art Déco".toUpperCase();
      } else if (paletteName === "ethnique") {
        paletteName = "Éthnique".toUpperCase();
      } else if (paletteName === "bohème") {
        paletteName = "Bohème".toUpperCase();
      } else if (paletteName === "modernMinimal") {
        paletteName = "Modern Minimal".toUpperCase();
      }  

  var tabPaletteColor = palette.colors.map((data, i) => {
    return (
      <Popover key={i} style={{radius:'70%'}} content={content} trigger="hover" placement="bottomRight">
        <div key={i} style={{ backgroundColor: data , cursos:'pointer'}} className="palette" onClick={()=> {handleClickCopyCode(data);openNotification()}}>
          <p className="textColorPalette">{data}</p>
        </div>
      </Popover>
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
      dispatch({type: 'addPalette', palette: palette})
    }, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPalette);
