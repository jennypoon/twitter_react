import React, { Component } from 'react';
import Siteicon from '../default_avatar.png'

class Header extends Component {

  render() {

    return (
      <div className="header">
        <img className="logo_icon" src={Siteicon} alt="bird logo"/>
        <h1>Twittr</h1>
      </div>
    )
  }

}

export default Header;
