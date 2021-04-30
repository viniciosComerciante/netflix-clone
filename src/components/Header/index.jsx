import React from "react";
import './style.css';

const Header = ({black}) => {
  return (
    <header className={black && 'header-black'}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo netflix"
          />
        </a>
      </div>
      <div className="header-user">
          <a href="/">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario"/>
          </a>
      </div>
    </header>
  );
};

export default Header;
