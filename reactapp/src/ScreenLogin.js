import React, {useState} from 'react';
import { Link, Redirect} from "react-router-dom";
import "./App.css";
import NavBar from "./navbar"
import {connect} from 'react-redux'
import { Button, Popover } from 'antd';
import "antd/dist/antd.css";



function Login(props) {

    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
  
    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignup, setErrorsSignup] = useState([])
    const [listErrorsSignin, setErrorsSignin] = useState([])
    

    var handleSubmitSignup = async () => {
    
        console.log('fetch')
        const data = await fetch('/signUp', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
        })
    
        const body = await data.json()

        console.log('body', body)
    

        if(body.result === true){
            setUserExists(true)
            
          } else {
            setErrorsSignup(body.error)
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
              
            }  else {
              setErrorsSignin(body.error)
            }
          }

          const text = <span>Mon compte</span>;
          const content = (
            <div>
              <Link to ='/mypalette'><p>Ma palette</p></Link>
              <Link to ='/'><p onClick={() => props.suppressionToken()}>Déconnexion</p></Link>
            </div>
          );

          if(props.userToken != null){
              var popover = <Popover placement="bottomRight" title={text} content={content} trigger="click">
              <img src='user.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/>
              </Popover>
          } else {
              popover =  <Link to='/login'><img src='user.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
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


                <div className='trait'><img src='line.png'/></div>
                <div className='inscription'>
                    Inscription
                        <div className='formLogin'>
                            <input onChange={(e) => setSignUpUsername(e.target.value)} type="text" name="usernameFromFront" placeholder='Prénom' className='input' />
                            <input onChange={(e) => setSignUpEmail(e.target.value)} type="text" name="emailFromFront" placeholder='Email' className='input'/>
                            <input onChange={(e) => setSignUpPassword(e.target.value)} type="password" name="passwordFromFront" placeholder='Mot de passe' className='input'/>
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
    return {userToken: state.token}
  }
  
function mapDispatchToProps(dispatch){
    return {
      addToken: function(token){
        dispatch({type: 'addToken', token: token})
      }, 
      suppressionToken: function(){
          dispatch({type: 'deconnexion'})
      }
    }
  }


  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
