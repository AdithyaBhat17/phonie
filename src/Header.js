import React from 'react';
import logo from './assets/unicorn.svg';

const Header = () => {
    return(
      <div className="header">
        <img className="logo" src={logo} alt="Phonie"/>
        <h1>Phonie</h1>
      </div>
    )
}


export default Header;
