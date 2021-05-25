import React, {useState, useEffect} from 'react';
import { Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import NavbarFixed from './navbarFixed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Popover, Button, Checkbox } from 'antd';
import { Form, FormGroup, Label, Input } from 'reactstrap';



function ShoppingList(props) {
const [userPalette, setUserPalette] = useState(props.userPaletteFromStore)
const [articleList, setArticleList] = useState([])
const [isLiked, setIsLiked] = useState(false)
const [wishlist, setWishlist] = useState(props.userWishlist)
const [popoverOpen, setPopoverOpen] = useState(false);

var likeColor = ''

useEffect(() => {
  if (props.token) {
  async function wishlistData() {
    const rawResponse = await fetch('/wishlist', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${props.token}`
    })
    const body = await rawResponse.json()
   setWishlist(body.wishlist)
   props.addToWishlist(body.wishlist)
  }
  wishlistData() }
},[]) 

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
 var handleClickWishList = (articleID) => {
  
      var resultFilter = wishlist.find(wishlist => wishlist._id === articleID)

      if (!resultFilter) { 
      async function addToWishlist() {
        const rawResponse = await fetch('/addToWishlist', {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `token=${props.token}&articleID=${articleID}`,
        })
        const response = await rawResponse.json()
        console.log('rajouté', response.wishlist)
        props.addToWishlist(response.wishlist)
      }
      addToWishlist()

      } else { 
        console.log('supprime')
      async function deleteArticle() {
        const deleteArticle = await fetch('/deleteFromWishlist', {
          method: 'PUT',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `token=${props.token}&articleID=${articleID}`,
        })
        const updateWishlist = await deleteArticle.json()
        console.log('update', updateWishlist)
        props.addToWishlist(updateWishlist.wishlist)
      }
      deleteArticle()
      } 
  }  

 ////////////////// MAP DES ARTICLES TROUVES EN BDD /////////////////
 if (props.userPaletteFromStore === '' ) {        // si il n'y a rien dans la liste d'article, l'utilsateur n'a pas fait le quizz, donc redirect home
return ( <Redirect to='/' /> )
} else 
{
  var displayArticles = articleList.map((article, i) => {
   
    var wishlistFilter = props.wishlist.find(wishlist => wishlist.merchantUrl === article.merchantUrl)
    

    if (wishlistFilter) { 
      console.log ('test Sybil bouton coeur', wishlistFilter)
    likeColor =  "#e74c3c"} else {
      likeColor = "#000000"
    }
  
      /////// pop over si pas connecté ////// 
 if (!props.token){
  var popoverWishList = <Popover placement="bottomRight" content='Veuillez vous connecter pour ajouter un article à votre Wishlist' trigger="click">
    <FontAwesomeIcon style={{cursor:'pointer', width: '15px'}} icon={faHeart}/>
    </Popover>
} else {
 popoverWishList = <FontAwesomeIcon onClick={() => handleClickWishList(article._id)} style={{cursor:'pointer', width: '15px'}} icon={faHeart} color={likeColor} />
}  
  

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
        {popoverWishList}
        <p className='articleCardTitle'> {article.price}€ </p>
      </div>
    </div>
    
  </Col>
  
  )
})
  
/// Map des couleurs de la palette //// 
  var displayPalette = userPalette.colors.map((color, i) => {
    return (
    <div key={i} className='color1' style={{height:'50px', width:'50px', backgroundColor:`${color}`}}> 
    </div>) }
    )

   
   /// map des inspirations /// 
  var displayInspo = userPalette.inspirations.map((photo, i) => {
    const content = (
      <img style={{minWidth:'400px', minHeight:'400px', maxWidth:'700px', maxHeight: '700px'}} src={photo} alt='inspo'/>
      )
    return (
      <Popover content={content} placement='right' >
      <Col key={i} md={2}lg={3} style={{backgroundColor:'white', margin:'10px', display:'flex'}}>
        <div  style={{height: '100%',display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
          <img style={{maxWidth:'100%', maxHeight: '100%'}} src={photo} alt='inspo'/>
        </div>
      </Col>
      </Popover>
      ) }
      ) 
    
      if (props.userPaletteFromStore) {
        var paletteName = props.userPaletteFromStore.name;
        if (paletteName === "artDeco") {
          paletteName = "Art Déco".toUpperCase();
        } else if (paletteName === "ethnique") {
          paletteName = "Éthnique".toUpperCase();
        } else if (paletteName === "bohème") {
          paletteName = "Bohème".toUpperCase();
        } else if (paletteName === "modernMinimal") {
          paletteName = "Modern Minimal".toUpperCase();
        } }

//////////////// FILTER  ////////////////
function onChangeDécoration(e) {
  console.log(`checked = ${e.target.checked}`);
}
function onChangeMobilier(e) {
  console.log(`checked = ${e.target.checked}`);
}
var content = (
  <div> 
    <h4 style={{backgroundColor:'#203126'}}> Catégorie </h4>
  <Checkbox onChange={onChangeMobilier}>Mobilier</Checkbox>
  <Checkbox onChange={onChangeDécoration}>Décoration</Checkbox>
  </div>
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
            VOTRE SHOPPING LIST {paletteName}</h4>

            {/* FILTRER  */}
            <Popover content={content} placement='right' >
            <Button id="Popover1" type="button" className='ButtonHome'> Filter </Button>
            </Popover>
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
    <div className="Scroll" style={{backgroundColor:'#203126', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'6px'}}>
      <h5 className='textShoppingList'>Découvrir des photos d'inspiration</h5>
      <a href="#sect2">
        <img style={{height:"30px", marginTop: '6px'}} src="doubleChevron.svg" alt="double chevron" />
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
      dispatch({type: 'addWishlist', wishlist:wishlist})
  },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps)
  (ShoppingList)


