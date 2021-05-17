import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


function Login() {
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
            <h3 style={{paddingTop: '15px'}}>Connexion / Inscription</h3>
            <div className='trait2'></div>
            <div className='login'>
                <div className='connexion'>
                Connexion
                    <form>
                        <label className='formLogin'>
                            <input type="text" name="emailFromFront" placeholder='Email' className='input' />
                            <input type="text" name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                        </label>
                            <input type="submit" value="Connexion" className='inputValider'/>
                    </form>
                </div>


                <div className='trait'><img src='line.png'/></div>
                <div className='inscription'>
                    Inscription
                    <form>
                        <label className='formLogin'>
                            <input type="text" name="nameFromFront" placeholder='Prénom' className='input' />
                            <input type="text" name="emailFromFront" placeholder='Email' className='input'/>
                            <input type="text" name="passwordFromFront" placeholder='Mot de passe' className='input'/>
                        </label>
                            <input type="submit" value="Connexion" className='inputValider'/>
                    </form>
                </div>

            </div>
        </div>

    </div>
  );
}

export default Login;
