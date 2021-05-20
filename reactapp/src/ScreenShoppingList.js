import { Button, Card } from 'antd';
import React, {useState} from 'react';
import NavBar from "./navbar"


function shoppingList() {

  const { Meta } = Card;
  
  return (
    <div className='background'>
    <NavBar/>
    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6', marginTop:'3vh', height:'75%', }}> 

    <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}> 
    <div className ='PaletteColors'style={{display:'flex', justifyContent:'space-between', width:'25%'}}> 
      <div className='color1' style={{height:'60px', width:'60px', backgroundColor:'red'}}> 
      </div>
      <div className='color1' style={{height:'60px', width:'60px', backgroundColor:'red'}}>  
      </div>
      <div className='color1' style={{height:'60px', width:'60px', backgroundColor:'red'}}> 
      </div>
      <div className='color1' style={{height:'60px', width:'60px', backgroundColor:'red'}}>  
      </div>
      <div className='color1' style={{height:'60px', width:'60px', backgroundColor:'red'}}>  
      </div>
    </div>
    <Button type='button'> Refaire le questionnaire </Button>
    </div>

    <div className='Articles' style={{ marginTop:'1%', marginLeft:'10%', marginRight:'10%'}}> 
     <div className="ShoppingList-Text"> 
     <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'1px solid black'}}> VOTRE SHOPPING LIST </h4>
    </div>
    <div> 
      <p> Filtrer </p>
    </div>

     <div className="SLIDER" style={{display:'flex', flexDirection:'column'}}> 
     


     <div className='Rangée' style={{display:'flex', justifyContent:'space-between'}}> 
      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>
    
    </div>

    <div className='Rangée' style={{display:'flex', justifyContent:'space-between'}}> 
      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>

      <div style={{backgroundColor:'black',height:'180px', width:'260px', margin:'10px', }}> 
        <div className='productImage' >
          {/* image + picto coeur  */}
        </div>
      </div>
    
    </div>


   </div>
   </div>

    </div>

    <div className="Scroll">
      <p>Découvrir les photos d'inspirations</p>
    </div>


    <div className="Inspirations" style={{backgroundColor:'#FCFBF6', marginTop:'3vh', height:'70%', }}> 

    

    </div>
    </div>
  

  
  );
}

export default shoppingList;