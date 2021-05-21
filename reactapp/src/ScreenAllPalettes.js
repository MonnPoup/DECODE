import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import { connect } from "react-redux";

function AllPalettes(props) {

const [allPalettes, setAllPalettes] = useState([])
const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
async function loadPalette() {
  var rawResponse = await fetch('/AllPalettes');
  var response = await rawResponse.json();
  console.log('reception palette back', response.AllPalettes);
  setAllPalettes(response.AllPalettes)
} loadPalette();

console.log('hello', allPalettes);

}, []);

/* var paletteColor = allPalettes. */



  return (
    <div className="background">
      <NavBar />
      <h3 className="h3AllPalettes">TOUTES LES PALETTES</h3>
      <div className="traitAllPalettes"></div>
      <div className="containerAllPalettes">
        <h3 className="h3Container">Hello</h3>
        <div className="traitContainerAllPalettes"></div>
        <div className="paletteAllPalettes"></div>
      </div>
    </div>
  );
}

export default AllPalettes;
