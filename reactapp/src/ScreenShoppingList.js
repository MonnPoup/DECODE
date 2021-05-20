import React, {useState, useEffect} from 'react';
import NavBar from "./navbar"
import { Button, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";


/* p {
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 20px;
  color: #fcfbf6;
} */

function ShoppingList(props) {
const [userPalette, setUserPalette] = useState(props.userPaletteFromStore)
const [articleList, setArticleList] = useState([])

useEffect( () => {
  
  async function loadData() { 
    const data = await fetch('/signUp', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `paletteName=${userPalette}`
    })
    const body = data.json()
    setArticleList([body.shoppingList])
  }
  loadData()
  console.log(articleList)


 }, []);

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
   

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      <Col md={2}lg={3} style={{backgroundColor:'white', height:'200px', margin:'10px'  }}> 
        <div style={{display:'flex', justifyContent:'center'}} className='productImage' >
          <img style={{width:'50%', height:'80%'}} src="https://cdn.laredoute.com/products/680by680/9/e/1/9e104ddb0c0c928cda419c35499147ea.jpg"  alt='product' /> 
          {/* image + picto coeur  */}
        </div>
        <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 10px"}}> 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}> 
            <h5 className='articleCardTitle'> Canapé en lin ocre </h5>
            <h6 className='articleCardBrand'> La Redoute Intérieurs </h6>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            <img src='heart.svg' alt='heart icon' style={{width: '15px'}}/>
            <h5 className='articleCardTitle'> 995€ </h5>
          </div>
        </div>
      </Col>

      


      </Row>
   </Container>

   </div>   {/* fin div slider */}
   
   

   </div>

    </div>

    <div className="Scroll" style={{backgroundColor:'#203126', display:'flex', flexDirection:'column', justifyContent:'center', padding:'3%'}}>
      <img
            style={{height:"40px"}}
            src="doubleChevron.svg"
            alt="double chevron"
          />
      <p style={{textAlign:'center', paddingTop:'5px'}}>Découvrir les photos d'inspirations</p>
    </div>


   <div className="Inspirations" style={{backgroundColor:'#FCFBF6', marginTop:'3vh', height:'70%', }}> 

    

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


