import React, {useState} from 'react';
import { Link, Redirect} from "react-router-dom";
import "./App.css";


function Login() {

    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const [userExists, setUserExists] = useState(false)
    const [listErrorsSignup, setErrorsSignup] = useState([])
    

    var handleSubmitSignup = async () => {
    
        const data = await fetch('/signUp', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passswordFromFront=${signUpPassword}`
        })
    
        const body = await data.json()
    

        if(body.result == true){
            setUserExists(true)
            
          } else {
            setErrorsSignup(body.error)
          }
        }

        if(userExists){
            return <Redirect to='/' />
          }

        var tabErrorsSignup = listErrorsSignup.map((error,i) => {
            return(<p>{error}</p>)
          })


  return (
    <div className='background'>
        <div className= 'navbarNormal'>
            <div>
                <h2 style={{marginLeft: '20px', marginTop: '25px'}}>DÉCODE.</h2> 
            </div>
                <div style={{marginTop: '25px'}}>  
                <Link to = '/allpalettes'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
                <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
                <Link to = '/login'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
                </div>
        </div>

        <div className= 'containerLogin' style={{marginTop: '80px'}}>
            <h3 className='h3title'>Connexion / Inscription</h3>
            <div className='trait2'></div>
            <div className='login'>
                <div className='connexion'>
                Connexion
                    <form>
                        <label className='formLogin'>
                            <input type="text" name="emailFromFront" placeholder='Email' className='input' />
                            <input type="password"  name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                        </label>
                        <input type="submit" value="Connexion" className='inputValider'/>
                    </form>
                </div>


                <div className='trait'><img src='line.png'/></div>
                <div className='inscription'>
                    Inscription
                    <form>
                        <label className='formLogin'>
                            <input onChange={(e) => setSignUpUsername(e.target.value)} type="text" name="usernameFromFront" placeholder='Prénom' className='input' />
                            <input onChange={(e) => setSignUpEmail(e.target.value)} type="text" name="emailFromFront" placeholder='Email' className='input'/>
                            <input onChange={(e) => setSignUpPassword(e.target.value)} type="password" name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                        </label>
                        {tabErrorsSignup}
                        <input onClick={() => handleSubmitSignup()} type="submit" value="Connexion" className='inputValider'/>
                    </form>
                </div>

            </div>
        </div>

    </div>
  );
}

export default Login;
