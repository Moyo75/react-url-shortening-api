import React from 'react';
import illustrationWorking from '../images/illustration-working.svg';

import '../styles/main.scss';

const Hero = () => {
  return (
    <section className={'hero'}>
      <div className='container'>
        <div className='hero__image'>
          <img src={illustrationWorking} alt='Illustration Working' />
        </div>
        <div className='hero__texts flex flex__column flex__ai-c'>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <a href='/' className={'hero__cta'}>
            get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
