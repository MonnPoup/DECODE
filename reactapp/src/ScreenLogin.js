import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";

function Login() {
  return (
    <div>
      <Nav className="navbarHome">
        <div className="">
        <h1>DÉCODE.</h1> 
        </div>
        <div>
        <NavItem>
          <NavLink href="#">
            <img src="palette.svg" alt="icon palette de couleur" style={{width: "30px"}}/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img src="heart.svg" alt="icon coeur" style={{width: "30px"}}/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img src="user.svg" alt="icon utilisateur" style={{width: "30px"}}/>
          </NavLink>
        </NavItem>
        </div>
      </Nav>
      <div>
      <img src="palette.svg" alt="icon palette de couleur" style={{width: "30px"}}/>
      </div>
    </div>
  );
}

export default Login;
