import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import "./App.css";
import NavBar from "./navbar"
import {connect} from 'react-redux'
import "antd/dist/antd.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


function Login(props) {

    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
  
    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignup, setErrorsSignup] = useState([])
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [iconeOeilSignUp, setIconeOeilSignUp] = useState("password")
    const [iconeOeilSignIn, setIconeOeilSignIn] = useState("password")

    

    var handleSubmitSignup = async () => {
        const data = await fetch('/signUp', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&paletteFromStore=${props.userPaletteFromStore._id}`
        })
    
        const body = await data.json()

    
        if(body.result === true){
            setUserExists(true)
            props.addToken(body.token) // envoi au store du token utilisateur 
            props.addUserStoreSignUp(signUpUsername)
            
          } else {
            setErrorsSignup(body.error) // si erreur avec sign-up, renvoie une erreur 
          }
        }


        var handleSubmitSignin = async () => {
 
            const data = await fetch('/signIn', {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
            })
        
            const body = await data.json()
        
            if(body.result === true){
              setUserExists(true)
              props.addToken(body.token)
              props.addUserStoreSignIn(body.user.firstName)
              console.log()
            }  else {
              setErrorsSignin(body.error)
            }
          }

          var mdpSignUpIsVisible = () => {
            if (iconeOeilSignUp === 'password'){
            setIconeOeilSignUp('text')
            console.log('text', iconeOeilSignUp)} else {
              setIconeOeilSignUp('password')
            }
          }

          var mdpSignInIsVisible = () => {
            if (iconeOeilSignIn === 'password'){
            setIconeOeilSignIn('text')
            console.log('text', iconeOeilSignIn)} else {
              setIconeOeilSignIn('password')
            }
          }
      

        
         if(userExists){
            return <Redirect to='/' /> 
          }

        var tabErrorsSignup = listErrorsSignup.map((error,i) => {
            return(<p style={{fontSize: '15px'}}>{error}</p>)
          })

        var tabErrorsSignin = listErrorsSignin.map((error,i) => {
            return(<p style={{fontSize: '15px'}}>{error}</p>)
          })

          const handleKeypress = e => {
          if (e.charCode === 13) {
            handleSubmitSignin();

          }
        };
          const handleKeypress2 = e => {
          if (e.charCode === 13) {
            handleSubmitSignup();
          }
      };

    return (
    <div className='background'>
        <NavBar/>
        <div className= 'containerLogin' style={{marginTop: '80px'}}>
            <h3 className="h3title">Connexion / Inscription</h3>
            <div className='trait2'></div>
            <div className='login'>
                <div className='connexion'>
                Connexion
                        <div className='formLogin'>
                            <input onChange={(e) => setSignInEmail(e.target.value)} type="text" name="emailFromFront" placeholder='Email' className='input' />
                            <div style={{display:'flex'}}>
                            <input onKeyPress={handleKeypress} onChange={(e) => setSignInPassword(e.target.value)} type={iconeOeilSignIn}  name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                            <FontAwesomeIcon onClick={() => mdpSignInIsVisible()} style={{cursor:'pointer', width: '22px', marginTop: '3vh', marginLeft:'1vw', color:'#203126'}} icon={faEye}/>
                            </div>
                        </div>
                        {tabErrorsSignin}
                        <input onClick={() => handleSubmitSignin()} type="submit" value="Connexion" className='inputValider'/>
                </div>


                <div className='trait'><img src='line.png' alt="line"/></div>
                <div className='inscription'>
                    Inscription
                        <div className='formLogin'>
                            <input onChange={(e) => setSignUpUsername(e.target.value)} type="text" name="usernameFromFront" placeholder='Prénom' className='input' />
                            <input onChange={(e) => setSignUpEmail(e.target.value)} type="text" name="emailFromFront" placeholder='Email' className='input'/>
                            <div style={{display:'flex'}}>
                            <input onKeyPress={handleKeypress2} onChange={(e) => setSignUpPassword(e.target.value)} type={iconeOeilSignUp}  name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                            <FontAwesomeIcon onClick={() => mdpSignUpIsVisible()} style={{cursor:'pointer', width: '22px', marginTop: '3vh', marginLeft:'1vw', color:'#203126'}} icon={faEye}/>
                            </div>
                            
                        </div>
                        {tabErrorsSignup}
                        <input onClick={() => handleSubmitSignup()} type="submit" value="Connexion" className='inputValider'/>
                </div>

            </div>
        </div>

    </div>
  );
}


function mapStateToProps(state){
    return {userToken: state.token, userPaletteFromStore : state.palette}
  }
  
function mapDispatchToProps(dispatch){
    return {
      addToken: function(token){
        dispatch({type: 'addToken', token: token})
      }, 
      suppressionToken: function(){
          dispatch({type: 'deconnexion'})
      },
      addUserStoreSignUp: function(userName){
        dispatch({type: 'userStoreSignUp', userName})
    },
    addUserStoreSignIn: function(userName){
      dispatch({type: 'userStoreSignIn', userName})
  },
    }
  }

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
