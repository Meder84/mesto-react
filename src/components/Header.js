import React from "react";
import logo from '../images/logo.svg';

function Header() {
  return(
    <header className="header">
      <a href="#" target="_blank">
        <img 
          className="logo header__logo opacity" 
          src={logo}
          alt="Текст Mesto. test" />
      </a>
    </header>
  )
}

export default Header;