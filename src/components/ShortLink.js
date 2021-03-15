import React from 'react';

import '../utils/script';

const ShortLink = () => {
  return (
    <div className={'link__container flex flex__column flex__jc-c'}>
      <p className={'initial__link'}>https://www.frontendmentor.io</p>
      <div className='link__seperator'></div>
      <p className={'shortened__link'}>https://reLink/k4lyk</p>
      <button className={'copy__button'}>Copy</button>
    </div>
  );
};

export default ShortLink;
