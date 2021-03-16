import React, { useState } from 'react';
import ShortLink from './ShortLink';

import { urlRegex } from '../utils/script';

// const endPoint = https://api.shrtco.de/v2/info?code=example

const ShortenFormAndLinks = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [url, setUrl] = useState('');

  function handleUrlInputChange(event) {
    event.persist();
    setUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(url);
    if (urlRegex.test(url)) {
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div
      className={
        'container form__links__container flex flex__column flex__jc-c flex__ai-c'
      }
    >
      <div className={'form__container'}>
        <form
          className={'form__shorten flex flex__column'}
          onSubmit={handleSubmit}
        >
          <input
            required
            type='text'
            value={url}
            className={'url__input'}
            onChange={handleUrlInputChange}
            placeholder={'Shorten a link here...'}
          />
          {showErrorMessage && (
            <span className={'validator__message'}>
              Please add a vaild link.
            </span>
          )}
          <button
            aria-label={'Shorten link'}
            type='submit'
            className={'shorten__button'}
          >
            shorten it!
          </button>
        </form>
      </div>
      <ShortLink />
    </div>
  );
};

export default ShortenFormAndLinks;
