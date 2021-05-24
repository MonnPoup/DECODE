import React, {useState, useEffect} from 'react';
import { Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import NavbarFixed from './navbarFixed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


/* p {
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 20px;
  color: #fcfbf6;
} */

function ShoppingList(props) {
const [userPalette, setUserPalette] = useState(props.userPaletteFromStore)
const [articleList, setArticleList] = useState([])
const [isLiked, setIsLiked] = useState(false)
const [wishlist, setWishlist] = useState(props.userWishlist)

var likeColor;





////////// CHERCHER LES ARTICLES EN BDD  //////////
useEffect( () => {
  
  async function loadData() { 
    const rawResponse = await fetch('/myShoppingList', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `paletteName=${userPalette.name}`
    })
    const body = await rawResponse.json()
    setArticleList(body.shoppingList)  // Mettre les articles dans un état ArticleList
  }
  loadData()
 }, []);

 useEffect( () => {
  setWishlist(props.wishlist)
  console.log('wishlist from store', props.wishlist)
 }, [props.wishlist]);



 ////////// AJOUTER OU SUPPRIMER UN ARTICLE EN WISHLIST  //////////
 var handleClickWishList = (articleID, index) => {
   
  var resultFilter = wishlist.filter(wishlist => wishlist._id === articleID)
  if (resultFilter[0] !== undefined) {setIsLiked(true)}
  console.log('1', isLiked)
   
  /* if (isLiked === false) { */
   async function addToWishlist() {
    const rawResponse = await fetch('/addToWishlist', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${props.token}&articleID=${articleID}`,
    })
    const response = await rawResponse.json()
    console.log('rajouté', response.wishlist)
    props.addToWishlist(response.wishlist)
    setIsLiked(true)
    console.log('2', isLiked)
  }
  addToWishlist()

/*   } else if (isLiked === true) { 
    console.log('supprime')
   async function deleteArticle() {
    const deleteArticle = await fetch('/deleteFromWishlist', {
      method: 'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${props.token}&index=${index}`
    })
    const updateWishlist = await deleteArticle.json()
    console.log('update', updateWishlist)
    props.addToWishlist(updateWishlist)
   }
   deleteArticle()
  } */

 }

 ////////// MAP DES ARTICLES TROUVES EN BDD //////////
 if (props.userPaletteFromStore === '' ) {        // si il n'y a rien dans la liste d'article, l'utilsateur n'a pas fait le quizz, donc redirect home
return ( <Redirect to='/' /> )
} else 
{
  
  var displayArticles = articleList.map((article, i) => {

    var wishlistFilter = wishlist.filter(wishlist => wishlist.name === article.name)
    if (wishlistFilter[0] !== undefined) {
    likeColor =  "#e74c3c"} else {likeColor = ''}
  
  return ( 
    
   <Col key={i} md={2}lg={3} style={{backgroundColor:'white', margin:'10px',  display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
    <a href={article.merchantUrl} target="_blank">
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '100%', height: '35vh'}} className='productImage' >
      <img style={{maxWidth:'100%', maxHeight: '100%'}} src={article.imageUrl}  alt='product' /> 
      {/* image + picto coeur  */}
    </div>
    </a>
    <div className="productInfo" style={{display:'flex', justifyContent:'space-between', margin:"5px 10px 5px 0px"}}> 
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', marginRight: '5px'}}> 
        <a href={article.merchantUrl} target="_blank">
          <h5 className='articleCardTitle'> {article.name} </h5> 
        </a>
        <h6 className='articleCardBrand'> {article.brand} </h6>
      </div>
      <div style={{display:'flex', flexDirection:'column',marginLeft: '10px', margin: '0px', alignItems:'flex-end', justifyContent: 'flex-start'}}> 
      <FontAwesomeIcon onClick={() => handleClickWishList(article._id, i)} style={{cursor:'pointer', width: '15px'}} icon={faHeart} color={likeColor} />
        <p className='articleCardTitle'> {article.price}€ </p>
      </div>
    </div>
    
  </Col>
  
  )
})
  

  var displayPalette = userPalette.colors.map((color, i) => {
    return (
    <div key={i} className='color1' style={{height:'50px', width:'50px', backgroundColor:`${color}`}}> 
    </div>) }
    )
   
  var displayInspo = userPalette.inspirations.map((photo, i) => {
    return (
      <Col key={i} md={2}lg={3} style={{backgroundColor:'white', margin:'10px', display:'flex'}}>
        <div  style={{height: '100%',display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
          <img style={{maxWidth:'100%', maxHeight: '100%'}} src={photo} alt='photo'/>
        </div>
      </Col>
      ) }
      ) 
    
  return (
    <div  className="background">     {/* FOND  */}
      <NavbarFixed />
    <div style={{height: '17vh', backgroundColor: '#203126'}}></div>  {/* trait vert */}

{/* CONTAINER ARTICLES */}
    <div className="ShoppingList" style={{dislpay:'flex', backgroundColor:'#FCFBF6', paddingBottom:'3vh' }}>  

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
            <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'3px solid #203126', color: '#203126', marginBottom: '10px'}}>
            VOTRE SHOPPING LIST </h4>
          </div>
  
      {/* SLIDER */}  
          <div className="scroller " style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}> 
            <Container lg={12} md={12} style={{ display:'flex', justifyContent: 'center', marginBottom: '3px'}} > 
              <Row  lg={12} md={12} style={{ display:'flex', justifyContent: 'center'}}> 
                {displayArticles}
              </Row>
            </Container> 
          </div>   {/* fin div slider */}
        </div> {/* fin article */}
      </div> {/* fin shopping list */}


  {/* BOUTTON SCROLL */}
    <div className="Scroll" style={{backgroundColor:'#203126', display:'flex', flexDirection:'column', justifyContent:'center', padding:'1%'}}>
      <a href="#sect2" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <img style={{height:"40px"}} src="doubleChevron.svg" alt="double chevron" />
      </a>
    </div>


{/* PARTIE INSPIRATION */}
    <div id='sect2' style={{backgroundColor: '#fcfbf6'}} >
      <div className="ShoppingList-Text" style={{marginLeft:'10%', marginRight:'10%'}}> 
      <h4 style={{fontWeight:'bold', width:'90%', borderBottom:'1px solid #203126', color: '#203126', marginBottom: '15px', paddingTop: '18vh'}}> INSPIRATIONS </h4>
      </div>

      <div className="Inspirations" style={{backgroundColor:'#FCFBF6', height:'100%', display: 'flex', width: '100%'}}> 
        <Container lg={12} md={12} style={{ display:'flex', justifyContent: 'center', marginBottom: '3px'}} > 
            <Row  lg={12} md={12} style={{ display:'flex', justifyContent: 'center'}}> 
              {displayInspo}
            </Row>
        </Container>
      </div>
    </div> {/* fin div inspiration  */}

    </div> /* fin div background */
  

  
  );
   
}}

function mapStateToProps(state) {
  return { userPaletteFromStore: state.palette, token: state.token, wishlist: state.wishlist };
}

function mapDispatchToProps(dispatch){
  return {
    suppressionToken: function(){
        dispatch({type: 'deconnexion'})
    },
    addToWishlist: function(wishlist){
      console.log('wishlist à envoyer:', wishlist)
      dispatch({type: 'addWishlist', wishlist:wishlist})
  },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps)
  (ShoppingList)


