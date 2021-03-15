import React from 'react';
import logo from '../images/logo.svg';

import '../styles/main.scss';
import '../utils/script';

const Header = () => {
  return (
    <header className={'header'}>
      <nav
        role={'navigation'}
        aria-label={'Main'}
        className={'container flex flex__jc-sb flex__ai-fs'}
      >
        <a href='/' className={'header__logo'}>
          <img src={logo} alt={'logo'} />
        </a>

        <div
          className={
            'header__links flex flex__jc-sb flex__ai-c hide-for-mobile'
          }
        >
          <ul className={'header__list flex flex__jc-sb flex__ai-fs'}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <a href='/' aria-label={'Go to login page'} className={'login'}>
            Login
          </a>
        </div>

        <a
          href='/'
          aria-label={'Go to sign up page'}
          className={'sign-up hide-for-mobile'}
        >
          Sign up
        </a>

        <div className='menu-button flex flex__jc-c flex__ai-c hide-for-desktop'>
          <div
            aria-label={'Toggle the menu button'}
            className='menu-button__hamburger'
          ></div>
        </div>
      </nav>

      <div className='header__menu hide flex flex__column flex__ai-c'>
        <a href='/'>Features</a>
        <a href='/'>Pricing</a>
        <a href='/'>Resources</a>
        <div className='divider'></div>
        <a href='/'>Login</a>
        <a href='/' className={'sign__up'}>
          Sign up
        </a>
      </div>
    </header>
  );
};

export default Header;
