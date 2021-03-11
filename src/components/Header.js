import React from 'react';
import logo from '../images/logo.svg';
import '../styles/main.scss';

const Header = () => {
  return (
    <header className={'header flex flex__jc-c'}>
      <nav
        role={'navigation'}
        aria-label={'Main'}
        className={'flex flex__jc-sb flex__ai-c'}
      >
        <div className='left-nav flex flex__ai-c'>
          <a href='/' className={'header__logo'}>
            <img src={logo} alt={'logo'} />
          </a>
          <ul className={'flex list hide-for-mobile'}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* <div
          className={
            'header__links flex flex__jc-sb flex__ai-c hide-for-mobile'
          }
        >
          <ul className={'flex'}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className='button__container'>
            <a href='/'>Login</a>
            <a href='/'>Sign up</a>
          </div>
        </div> */}
        <div className='button__container hide-for-mobile'>
          <a href='/'>Login</a>
          <a href='/'>Sign up</a>
        </div>

        <div className='menu-button flex flex__jc-c flex__ai-c hide-for-desktop'>
          <div className='menu-button__hamburger'></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
