import React, { useState, useContext } from 'react';
import copy from 'copy-to-clipboard';

import '../utils/script';
import { FetchDataContext } from './ShortenFormAndLinks';

const ShortLink = () => {
  const [buttonText, setButtonText] = useState('Copy');
  const [backgroundColor, setBackgroundColor] = useState(false);
  const { original_link, short_link } = useContext(FetchDataContext);

  const handleCopy = () => {
    copy(short_link, { format: 'text/plain', debug: true });
    setButtonText('Copied!');
    setBackgroundColor(true);

    setTimeout(() => {
      setButtonText('Copy');
      setBackgroundColor(false);
    }, 3000);
  };

  return (
    <div className={'link__container flex flex__column flex__jc-c'}>
      <p className={'initial__link'}>{original_link}</p>
      <div className='link__seperator'></div>
      <div className={'short__link-button flex flex__column '}>
        <p className={'shortened__link'}>{short_link}</p>
        <button
          className={'copy__button'}
          onClick={handleCopy}
          style={{ backgroundColor: backgroundColor && '#3B3054' }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
