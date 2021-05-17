import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";


function Login() {
  return (
    <div className='background'>
        <div className= 'navbarNormal'>
            <div>
                <h2 style={{marginLeft: '20px', marginTop: '25px'}}>DÉCODE.</h2> 
            </div>
                <div style={{marginTop: '25px'}}>  
                <Link to = '/login'><img src='palette.svg' alt='user icon' style={{width: '30px', margin: '20px'}}/></Link>
                <Link to = '/wishlist'><img src='heart.svg' alt='heart icon' style={{width: '30px', margin: '20px'}}/></Link>
                <Link to = '/allpalettes'><img src='user.svg' alt='palette icon' style={{width: '30px', margin: '20px'}}/></Link>
                </div>
        </div>

        <div className= 'container' style={{marginTop: '80px'}}>
            <h3>Connexion / Inscription</h3>
            <div className='login'>
                <div className='connexion'>Connexion</div>
                <div className='inscription'>Inscription</div>
            </div>
        </div>

    </div>
  );
}

export default Login;
