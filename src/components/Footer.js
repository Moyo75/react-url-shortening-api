import React from 'react';

import iconFacebook from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconInstagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className={'footer flex flex__column flex__jc-c flex__ai-c'}>
      <h1 translate={'no'}>Shortly</h1>
      <div
        className={'footer__list-set flex flex__column flex__jc-c flex__ai-c'}
      >
        <h3>Features</h3>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div
        className={'footer__list-set flex flex__column flex__jc-c flex__ai-c'}
      >
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Support</li>
          <li>Developers</li>
        </ul>
      </div>
      <div
        className={'footer__list-set flex flex__column flex__jc-c flex__ai-c'}
      >
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={'icon__list flex flex__ai-c flex__jc-se'}>
        <img src={iconFacebook} alt='Facebook Icon' />
        <img src={iconTwitter} alt='Twitter Icon' />
        <img src={iconPinterest} alt='Pinterest Icon' />
        <img src={iconInstagram} alt='Instagram Icon' />
      </div>
    </div>
  );
};

export default Footer;
