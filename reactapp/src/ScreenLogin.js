import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import "./App.css";
import NavBar from "./navbar"
import {connect} from 'react-redux'
import "antd/dist/antd.css";
import { faHeart } from '@fortawesome/free-solid-svg-icons'



function Login(props) {

    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
  
    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignup, setErrorsSignup] = useState([])
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [iconeOeil, setIconeOeil] = useState("password")
    

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
            }  else {
              setErrorsSignin(body.error)
            }
          }

          var mdpIsVisible = () => {
            if (iconeOeil === 'password'){
            setIconeOeil('text')
            console.log('text', iconeOeil)} else {
              setIconeOeil('password')
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
                            <input onChange={(e) => setSignInPassword(e.target.value)} type="password"  name="passwordFromFront" placeholder='Mot de passe' className='input'/>
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
                            <input onChange={(e) => setSignUpPassword(e.target.value)} type={iconeOeil} name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                            <img onClick={() => mdpIsVisible()} style={{width: '50px', padding:'10px', paddingTop:'20px'}} src='oeil.png'/>
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
    }
  }

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
