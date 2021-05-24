import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import NavbarFixed from './navbarFixed';



function Wishlist(props) {
  
  const [wishlist, setWishlist] = useState([props.wishlist])

  

 useEffect(() => {
  if (props.token) {
    console.log('user connected wishlist')
  async function wishlistData() {
    const rawResponse = await fetch('/wishlist', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${props.token}`
    })
    const body = await rawResponse.json()
   console.log('body bdd wishlist', body)
   setWishlist(body.wishlist)
   props.addToWishlist(body.wishlist)
  }
  wishlistData()}

},[]) 

useEffect(() => {
  setWishlist(props.wishlist)
}, [props.wishlist])

 var handleClickDelete = async (paletteIndex) => {
  const deleteArticle = await fetch('/deleteFromWishlist', {
    method: 'PUT',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `token=${props.token}&index=${paletteIndex}`
  })
  const response = await deleteArticle.json()
  console.log('update recue ', response)
 
  props.deleteArticle(paletteIndex)
 } 


var displayWishlist = wishlist.map((article,i) => {
 
  return (
    <Col md={2}lg={2} style={{backgroundColor:'white', margin:'10px', minWidth:"200px", display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '100%', height: '35vh'}} className='productImage' >
      <img style={{maxWidth:'100%', maxHeight: '100%'}} src={article.imageUrl}  alt='product' /> 
      {/* image + picto coeur  */}
    </div>
    <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 0px"}}> 
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', marginRight: '5px'}}> 
       <a href={article.merchantUrl} target="_blank"> <h5 className='articleCardTitle'> {article.name} </h5></a>
        <h6 className='articleCardBrand'> {article.brand} </h6>
      </div>
      <div style={{display:'flex', flexDirection:'column',marginLeft: '10px', margin: '0px', alignItems:'flex-end', justifyContent: 'flex-start'}}> 
        <img src='delete.svg' alt='heart icon' style={{width: '15px'}} onClick={() => handleClickDelete(i)}/>
        <p className='articleCardTitle'> {article.price}€ </p>
      </div>
    </div>
  </Col>
  )

})
  
if (wishlist.length !== 0 ){
    return (
      <div>
      <NavbarFixed />
      
      <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
      <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6',paddingTop:'3vh', paddingBottom:'20vh', height:'100%' }}> 
      <div className="ShoppingList-Text" style={{paddingLeft:'3em'}}> 
        <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'3px solid #203126', color: '#203126', marginBottom: '10px'}}>
            VOTRE WISHLIST</h4>
      </div>
        <Container  style={{display:'flex', justifyContent: 'center', marginBottom: '3px', }} > 
          <Row  style={{ display:'flex', justifyContent: 'center'}}> 
            {displayWishlist}
          </Row>
        </Container>  
      </div>  
      </div>
      
    );}
    else if (props.token) {
      return ( 
      <div className="background">
      <NavbarFixed />
    <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6',paddingTop:'3vh', paddingBottom:'3vh', height:'100vh' }}> 
      <p style={{fontSize:'30px', textAlign:'center'}}>Wishlist vide</p> 
      <Link to="/shoppinglist">
          <button className="inputShoppingList">Voir ma shopping list</button>
      </Link>
      
    </div>  
    </div>
    ) 
    } else { 
      return (
  <div className="background">
    <NavbarFixed />
    <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6',paddingTop:'3vh', paddingBottom:'3vh', height:'100vh' }}> 
      <p style={{fontSize:'30px', textAlign:'center'}}>Connectez vous pour accéder à votre wishlist</p> 
      <Link to="/login">
            <button className="inputShoppingList">Connectez-vous</button>
          </Link>
    </div>  
    </div>
      )
    }
  }
  
  
function mapStateToProps(state) {
  return { userPaletteFromStore: state.palette, token: state.token, wishlist:state.wishlist };
}

function mapDispatchToProps(dispatch){
  return {
    addToWishlist: function(wishlist){
        dispatch({type: 'addWishlist', wishlist:wishlist})
    },
    deleteArticle : function(index){
      dispatch({type: 'deleteArticle', index:index})
  },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);