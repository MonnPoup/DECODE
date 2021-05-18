var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var bcrypt = require('bcrypt');


var userModel = require('../models/users');


router.get('/', async (req, res, next) => {
  res.json()
});

router.post('/signUp', async (req, res, next) => {
  var error = []
  var saveUser = null
  var result = false
  var token = null


  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  console.log("retour bdd", data)

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

      var hash = bcrypt.hashSync(req.body.passwordFromFront, 10);
      var newUser = new userModel({
      firstName: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid2(32),
      palette: [], 
      wishlist: [], 
    })
  
    saveUser = await newUser.save();
  
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
 /*  console.log(result, error, saveUser, token) */
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



router.post('/myPalette', async  (req, res,next) => {
  
 (console.log('body', req.body))
 
 var result = false; 
  var rep1 = req.body.rep1; 
  var rep2 = req.body.rep2; 
  var rep3 = req.body.rep3; 
  var rep4 = req.body.rep4;
  var rep5 = req.body.rep5;
  var rep6 = req.body.rep6;
  var rep7 = req.body.rep7;

 /*  var resultquizz = 'nomdelapalette' 

  var UserPalette = await paletteModel.findOne({
    name: resultquizz
  })

  if (UserPalette) {result = true; res.json({result, UserPalette})} 
  else  {res.json({result})}  */


});

router.get('/myShoppingList', async (req, res) => {
  var result = false 
  var paletteFromFront = req.body.paletteName 

  var shoppingList = await articlesModel.find({
    paletteName : paletteFromFront }
  )
  // filtrer les objets par palette name 
  // utilisée à l'initialisation du composant 
  
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

