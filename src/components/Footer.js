import React from 'react';
import PhoneLink from './PhoneLink';

const Footer = () => {
    return (
        <footer>
          <div className="footer">
            <div className="footer-logo"></div>
            <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
            <a href="tel:79625561234" className="footer-phone"> </a>
            <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="/">Ваше имя</a></div>
            <PhoneLink selector="footer-phonelink"/>
          </div>
        </footer>
    );
};

export default Footer;