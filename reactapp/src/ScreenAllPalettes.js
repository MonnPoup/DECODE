import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import AllPaletteModel from "./AllPaletteModel"


function AllPalettes() {

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
     <AllPaletteModel />
    </div>
  );
}

export default AllPalettes;
