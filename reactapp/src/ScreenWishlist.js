import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import NavbarFixed from './navbarFixed';



function Wishlist(props) {
  
  const [wishlist, setWishlist] = useState([props.wishlist])
  console.log(props.token)
  

 useEffect(() => {
  if (props.token) {
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
  wishlistData() }
},[]) 

useEffect(() => {
  setWishlist(props.wishlist)
}, [props.wishlist])

 var handleClickDelete = async (articleID, index) => {
  const deleteArticle = await fetch('/deleteFromWishlist', {
    method: 'PUT',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `token=${props.token}&articleID=${articleID}`
  })
  const response = await deleteArticle.json()
  console.log('update recue ', response)
 
  props.deleteArticle(index)
 } 


var displayWishlist = wishlist.map((article,i) => {
 
  return (
    <Col md={2}lg={2} className="cardWishlist" > 
    <div  className='productImage' >
      <img style={{maxWidth:'100%', maxHeight: '100%'}} src={article.imageUrl}  alt='product' /> 
      {/* image + picto coeur  */}
    </div>
    <div className="productInfo"> 
      <div className="infoWishlist"> 
       <a href={article.merchantUrl} target="_blank"> <h5 className='articleWishList'> {article.name} </h5></a>
        <h6 className='articleCardBrand'> {article.brand} </h6>
      </div>
      <div className="priceWishlist" > 
        <img src='delete.svg' alt='heart icon' style={{width: '15px'}} onClick={() => handleClickDelete(article._id, i)}/>
        <p className='articleWishList'> {article.price}€ </p>
      </div>
    </div>
  </Col>
  )

})
  
if (wishlist.length !== 0){
    return (
      <div style={{backgroundColor:'#FCFBF6'}}>
      <NavbarFixed />
      
      <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
      <div  style={{backgroundColor:'#FCFBF6', paddingTop: '2vh', paddingBottom: '15vh', height: '100%', minHeight: '8vh'}}> 
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Link to="/shoppinglist">
            <button className="inputWishlist">Voir ma shopping list</button>
      </Link>
      </div>
       
     
  
      <div className="wishlist-text" > 
        <div style={{width: '70%'}}>
        <h4 className="wishlist-title" >
            VOTRE WISHLIST
        </h4>
        <h4 style={{fontSize: '15px'}}>{props.wishlist.length} articles</h4>
        </div>

      </div>
        <Container className="containerWishlistCard" > 
          <Row  style={{ display:'flex', justifyContent: 'center'}}> 
            {displayWishlist}
          </Row>
        </Container> 
      </div>  
      </div>
      
    );}
    else if (props.token !== null) {
      return ( 
      <div className="background">
      <NavbarFixed />
    <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
    <div style={{dislpay:'flex', backgroundColor:'#FCFBF6',paddingTop:'3vh', paddingBottom:'3vh', height:'100vh' }}> 
      <p style={{fontSize:'30px', textAlign:'center'}}>Wishlist vide</p> 
      <Link to="/mypalette">
          <button className="inputShoppingList">Voir ma palette</button>
      </Link>
      
    </div>  
    </div>
    ) 
    } else  { 
      return (
  <div className="background">
    <NavbarFixed />
    <div style={{height: '17vh', backgroundColor: '#203126'}}></div>
    <div  style={{dislpay:'flex', backgroundColor:'#FCFBF6',paddingTop:'3vh', paddingBottom:'3vh', height:'100vh' }}> 
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