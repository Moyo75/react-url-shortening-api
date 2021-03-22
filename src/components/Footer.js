import React from 'react';

import iconFacebook from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconInstagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <section className={'footer__section'}>
      <div
        className={'container footer flex flex__column flex__jc-c flex__ai-c'}
      >
        <h1 translate={'no'}>Shortly</h1>

        <div className={'lists__icons flex flex__column flex__jc-c flex__ai-c'}>
          <div
            className={
              'footer__list-set  flex flex__column flex__jc-c flex__ai-c'
            }
          >
            <h3>Features</h3>
            <ul className={'first__list'}>
              <li>
                <a href={'/'}>Link Shortening</a>
              </li>
              <li>
                <a href={'/'}>Branded Links</a>
              </li>
              <li>
                <a href={'/'}>Analytics</a>
              </li>
            </ul>
          </div>
          <div
            className={
              'footer__list-set flex flex__column flex__jc-c flex__ai-c'
            }
          >
            <h3>Resources</h3>
            <ul className={'second__list'}>
              <li>
                <a href={'/'}>Blog</a>
              </li>
              <li>
                <a href={'/'}>Developers</a>
              </li>
              <li>
                <a href={'/'}>Support</a>
              </li>
            </ul>
          </div>
          <div
            className={
              'footer__list-set flex flex__column flex__jc-c flex__ai-c'
            }
          >
            <h3>Company</h3>
            <ul className={'third__list'}>
              <li>
                <a href={'/'}>About</a>
              </li>
              <li>
                <a href={'/'}>Our Team</a>
              </li>
              <li>
                <a href={'/'}>Careers</a>
              </li>
              <li>
                <a href={'/'}>Contact</a>
              </li>
            </ul>
          </div>
          <div className={'icon__list flex flex__ai-c flex__jc-sb'}>
            <a href={'/'}>
              <img loading={'lazy'} src={iconFacebook} alt={'Facebook Icon'} />
            </a>
            <a href={'/'}>
              <img loading={'lazy'} src={iconTwitter} alt={'Facebook Icon'} />
            </a>
            <a href={'/'}>
              <img loading={'lazy'} src={iconPinterest} alt={'Facebook Icon'} />
            </a>
            <a href={'/'}>
              <img loading={'lazy'} src={iconInstagram} alt={'Facebook Icon'} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
