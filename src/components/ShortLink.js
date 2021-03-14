import React from 'react';

const ShortLink = () => {
  return (
    <div className={'link__container flex flex__column flex__jc-c'}>
      <p className={'initial__link'}>https://www.frontendmentor.io</p>
      <div className='link__seperator'></div>
      <p className={'shortened__link'}>https://reLink/k4lyk</p>
      <button>Copy</button>
    </div>
  );
};

export default ShortLink;
