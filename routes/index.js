var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var bcrypt = require('bcrypt');


var userModel = require('../models/users');
var paletteModel = require('../models/palettes')
var articleModel = require('../models/articles')


router.get('/', async (req, res, next) => {
  res.json()
});

router.post('/signUp', async (req, res, next) => {
  console.log('req.body.paletteFromStore._id', req.body)
  var error = []
  var saveUser = null
  var result = false
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })


  if(data != null){
    error.push('Utilisateur déjà présent')
  }

  if(req.body.usernameFromFront == ''
  || req.body.emailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('Champs vides')
  }

  
  if(error.length == 0){
console.log('body palette', req.body.paletteFromStore)
      var hash = bcrypt.hashSync(req.body.passwordFromFront, 10); 
      var newUser = new userModel({
      firstName: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid2(32),
      palette: req.body.paletteFromStore, 
      wishlist: [], 
    })
  
    saveUser = await newUser.save();
   /*  await saveUser.updateOne({palette : idPalette}) */
    console.log('id recu', saveUser)
    console.log('tout palette', saveUser.palette)
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }

  res.json({result, error, saveUser, token})
});


router.post('/signIn', async (req, res) => {
  var result = false
  var user = null
  var error = []
  var token = null
  
  if(req.body.emailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('Champs vides')
  }

  if(error.length == 0){
    const user = await userModel.findOne({
      email: req.body.emailFromFront,
    })
  
    
    if(user){
      if(bcrypt.compareSync(req.body.passwordFromFront, user.password)){
        result = true
        token = user.token
      } else {
        result = false
        error.push('Mot de passe incorrect')
      }
      
    } else {
      error.push('Email incorrect')
    }
  }
  

  res.json({result, user, error, token})

});



router.post('/validerQuiz', async  (req, res,next) => {
  
  ///////////////// QUESTIONNAIRE ////////////
  var result = false; 
  var userPalette = null;
  var isConnected = false
  if (req.body.token !== null ) { isConnected = true} 
 
  var responses = [req.body.rep1, req.body.rep2, req.body.rep3, req.body.rep4, req.body.rep5, req.body.rep6, req.body.rep7]  

  var palette1 = 0;
  var palette2 = 0;
  var palette3 = 0; 
  var palette4 = 0; 
  

  for (var i=0; i < responses.length;i++) {
    if (responses[i] === 'ethnique') {palette1++} 
    else if (responses[i] === 'bohème') {palette2++}
    else if (responses[i] === 'artDeco') {palette3++}
    else if (responses[i] === 'modernMinimal') {palette4++}
  }

  if (responses[2] === 'ethnique') {palette1 += 2} 
  else if (responses[2] === 'bohème') {palette2 += 2}
  else if (responses[2] === 'artDeco') {palette3 +=2}
  else if (responses[2] === 'modernMinimal') {palette4 +=2} 


  var compteursArray = [
    { palette: 'ethnique', compteur : palette1},
    { palette: 'bohème', compteur : palette2},
    { palette: 'artDeco', compteur : palette3},
    { palette: 'modernMinimal', compteur : palette4}
  ]

  var sortedResults = compteursArray.sort(function compare(a, b) {
    if (a.compteur < b.compteur)
       return -1;
    if (a.compteur > b.compteur )
       return 1;
    return 0;}
    )

 console.log('Votre palette est ', sortedResults[sortedResults.length-1].palette)   

 var resultquizz = sortedResults[sortedResults.length-1].palette

 /////////////////////// TROUVER LA PALETTE EN BDD ////////////////

  var userPalette = await paletteModel.findOne(    // find palette dans la bdd 
  {name: resultquizz})

 if (isConnected === false){
    console.log('userpalette ', userPalette)
    if (userPalette) 
    {result = true; res.json({result, userPalette})}
     else {res.json({result})}  
   } 
   else  {  

      var userUpdated = await userModel.updateOne( 
        {token: req.body.token},
        {palette: userPalette._id}
      ) 
        console.log('userUpdated', userUpdated)
      if (userUpdated) { result = true; res.json({result, userPalette}) }
      else {res.json({result})} 
   }

/*    {       // si user connecté, on le trouve avec son token 
    console.log('token chelou', req.body.token)
    var userConnected = await userModel.findOne(
      {token: req.body.token}
    )
    
  console.log('userconnected', userConnected);  // et on ajoute sa palette en bdd   REVOIR ICI peut ê _id 
    var ajoutPalette = await userModel.updateOne(
      {token: req.body.token}
      {palette: userPalette._id}
    )
  console.log('ajoutpalette', ajoutPalette)
  }  */
  
  
   
});


router.post('/myPalette', async  (req, res,next) => {

  if (req.body.token != null) {
    var userForId = await userModel.findOne(   // trouver l'utilisateur avec son token 
      {token: req.body.token})

      var user = await userModel.       // populate pour aller récupére la palette 
      findById(userForId._id)
      .populate('palette')
      console.log('user et sa palette', user.palette)
  
    res.json({userPalette: user.palette})}

    else {
      res.json({userPalette: false})
    }
});

router.post('/myShoppingList', async (req, res) => {
 
  var result = false 
  var paletteFromFront = req.body.paletteName 
 

  var shoppingList = await articleModel.find({
    paletteName : paletteFromFront }
  )

  
  if (shoppingList) {result = true; res.json({result, shoppingList})} 
  else  {res.json({result})}
});


router.post('/addToWishlist', async(req, res) => {
  article = req.body.id 

  var updateUser = await userModel.findOne({token: req.body.token})
  updateUser.wishlist.push(article)

  res.json({updateUser})
}); 

router.get('/wishlist', async (req, res) => {
  var user = await userModel.
 findById('5b9fb50411e0ac035433ba81')
 .populate('wishlist')
 .exec();

 var wishlist = user.wishlist; 

 var result; 
 if (wishlist.lenght != 0) {
   result = true
   res.json({result, wishlist})
  }
 else {
   result = false 
   res.json({result})
  }
 
});


router.put('/deleteFromWishlist', async (req, res) => {   //  put ou delete ?? 
  var result = false
  var updatedWishlist = req.body.wishlist
  var user = await userModel.updateOne({token: req.body.token}, {wishlist : [updatedWishlist]})

  res.json(result)
});



module.exports = router;

