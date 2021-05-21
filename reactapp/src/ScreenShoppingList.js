import React, {useState, useEffect} from 'react';
import NavBar from "./navbar"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";


/* p {
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 20px;
  color: #fcfbf6;
} */

function ShoppingList(props) {
const [userPalette, setUserPalette] = useState(props.userPaletteFromStore)
const [articleList, setArticleList] = useState([''])

useEffect( () => {
  
  async function loadData() { 
    const data = await fetch('/myShoppingList', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `paletteName=${userPalette.name}`
    })
    const body = await data.json()
    setArticleList(body.shoppingList)
  }
  loadData()


 }, []);

  if (articleList !== "") {
var displayArticles = articleList.map((article, i) => {
  return ( 
    <Col md={2}lg={3} style={{backgroundColor:'white', margin:'10px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '100%', height: '35vh'}} className='productImage' >
      <img style={{maxWidth:'100%', maxHeight: '100%'}} src={article.imageUrl}  alt='product' /> 
      {/* image + picto coeur  */}
    </div>
    <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 0px"}}> 
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', marginRight: '5px'}}> 
        <h5 className='articleCardTitle'> {article.name} </h5>
        <h6 className='articleCardBrand'> {article.brand} </h6>
      </div>
      <div style={{display:'flex', flexDirection:'column',marginLeft: '10px', margin: '0px', alignItems:'flex-end', justifyContent: 'flex-start'}}> 
        <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
        <p className='articleCardTitle'> {article.price}€ </p>
      </div>
    </div>
  </Col>
  )
})
  }

  var displayPalette = userPalette.colors.map((color, i) => {
    return (
    <div key={i} className='color1' style={{height:'50px', width:'50px', backgroundColor:`${color}`}}> 
    </div>) }
    )
   
    var displayInspo = userPalette.inspirations.map((photo, i) => {
      return (
        <img src={photo} alt='photo'/>
      ) }
      ) 
    
  return (
    <div className='background'>     {/* FOND  */}
    <NavBar/>

    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6', marginTop:'1vh', paddingBottom:'3vh' }}> 


{/* PALETTE + BOUTON REFAIRE QUIZZ */}
      <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}> 
        <div className ='PaletteColors'style={{display:'flex', justifyContent:'space-around', width:'25%'}}> 
        
          {displayPalette}
          
        </div>
        <Link to="/quiz">
        <button className="inputShoppingList">Refaire le questionnaire</button>
      </Link>
    </div>

{/* SELECTION D'ARTICLE */}

    <div className='Articles' style={{ marginTop:'1%', marginLeft:'10%', marginRight:'10%'}}> 
     <div className="ShoppingList-Text"> 
     <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'1px solid #203126', color: '#203126', marginBottom: '10px'}}> VOTRE SHOPPING LIST </h4>
    </div>
   

      {/* SLIDER */}
    
       
     <div className="scroller " style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}> 
    
    
     <Container lg={12} md={12} style={{ display:'flex', justifyContent: 'center', marginBottom: '3px'}} > 

      <Row  lg={12} md={12} style={{ display:'flex', justifyContent: 'center'}}> 
   

      {displayArticles}


      </Row>
   </Container>

   </div>   {/* fin div slider */}
   
   

   </div>

    </div>

    <div className="Scroll" style={{backgroundColor:'#203126', display:'flex', flexDirection:'column', justifyContent:'center', padding:'1%'}}>
    <a href="#sect2" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <img
            style={{height:"40px"}}
            src="doubleChevron.svg"
            alt="double chevron"
          />
      </a>
    </div>

   <div id='sect2' className="Inspirations" style={{backgroundColor:'#FCFBF6', height:'70%', }}> 

   {displayInspo}

    </div>

    </div>
  

  
  );
}


function mapStateToProps(state) {
  return { userPaletteFromStore: state.palette, token: state.token };
}

export default connect
(mapStateToProps,
   null)
(ShoppingList);


