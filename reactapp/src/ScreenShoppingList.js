import React, {useState} from 'react';
import NavBar from "./navbar"
import { Button, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Container, Row, Col } from 'react-bootstrap';


function shoppingList() {


  return (
    <div className='background'>     {/* FOND  */}
    <NavBar/>

    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6', marginTop:'3vh', paddingBottom:'10vh' }}> 


{/* PALETTE + BOUTON REFAIRE QUIZZ */}
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

{/* SELECTION D'ARTICLE */}

    <div className='Articles' style={{ marginTop:'1%', marginLeft:'10%', marginRight:'10%'}}> 
     <div className="ShoppingList-Text"> 
     <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'1px solid black'}}> VOTRE SHOPPING LIST </h4>
    </div>
    <div> 
      <p> Filtrer </p>
    </div>

   

      {/* SLIDER */}
    
       
     <div className="scroller " style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}> 
    
    
     <Container lg={12} md={12} style={{ display:'flex', justifyContent: 'center'}} > 

      <Row  lg={12} md={12} style={{ display:'flex', justifyContent: 'center'}}> 
   

      <Col md={2}lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2} lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

<Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

<Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>

<Col lg={3} style={{backgroundColor:'white',height:'180px', width:'25%', margin:'10px', }}> 
        <div style={{display:'flex', justifyContent:'center', width:'260px', height:'140px'}} className='productImage' >
          <img style={{}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex',justifyContent:'space-between', height:'20%', margin:"0px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5> Canapé en lin ocre </h5>
            <h6> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5> 995€ </h5>
          </div>
        </div>
      </Col>


      </Row>
   </Container>

   </div>   {/* fin div slider */}
   
   

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