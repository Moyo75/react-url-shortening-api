import React, { useState } from 'react';

import '../utils/script';

const ShortLink = ({ fetchedData }) => {
  const [buttonText, setButtonText] = useState('Copy');
  const [backgroundColor, setBackgroundColor] = useState(false);
  const { original_link, short_link } = fetchedData;

  const handleCopy = () => {
    navigator.clipboard.writeText(short_link);
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
      <p className={'shortened__link'}>{short_link}</p>
      {document.queryCommandSupported('copy') && (
        <button
          className={'copy__button'}
          onClick={handleCopy}
          style={{ backgroundColor: backgroundColor && '#3B3054' }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ShortLink;
