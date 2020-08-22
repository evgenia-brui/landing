import React from 'react';
import PhoneLink from './PhoneLink';

const Header = () => {
    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <a href="/"><div className="header-logo"></div></a>
            <a href="tel:79625561234" className="header-phone"> </a>
            <PhoneLink selector="header-phonelink"/>
          </div>
        </div>
      </header>
    );
};

export default Header;