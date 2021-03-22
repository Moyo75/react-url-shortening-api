import React, { useState } from 'react';
import ShortLink from './ShortLink';

import { urlRegex } from '../utils/script';

const ShortenFormAndLinks = () => {
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [noInputErrorMessage, setNoInputErrorMessage] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');
  const endPoint = 'https://api.shrtco.de/v2/shorten';

  function handleUrlInputChange(event) {
    setUrl(event.target.value);
    setNoInputErrorMessage(false);
    setShowInvalidMessage(false);
  }

  function handleNoInput() {
    if (url === '') {
      setNoInputErrorMessage(true);
    } else {
      setNoInputErrorMessage(false);
    }
  }

  function handleInvalidLink() {
    if (urlRegex.test(url) === false) {
      setShowInvalidMessage(true);
    } else {
      setShowInvalidMessage(false);
    }
  }

  const postUrl = async () => {
    try {
      const response = await fetch(`${endPoint}?url=${url}`);
      const data = await response.json();

      setFetchedData(data.result);
      console.log(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleNoInput();

    if (url !== '') {
      console.log(url);
      handleInvalidLink();
    }

    if (showInvalidMessage === false) {
      postUrl();
      setUrl('');
    }

    return;
  }

  return (
    <div
      className={
        'form__links__container flex flex__column flex__jc-c flex__ai-c'
      }
    >
      <div className={'form__container'}>
        <form
          className={'form__shorten flex flex__column flex__jc-c'}
          onSubmit={handleSubmit}
        >
          <div className={'form__error__container flex flex__column'}>
            <input
              type='text'
              value={url}
              onChange={handleUrlInputChange}
              placeholder={'Shorten a link here...'}
              className={
                noInputErrorMessage || showInvalidMessage ? 'error-case' : null
              }
            />
            {noInputErrorMessage && (
              <span className={'validator__message'}>Please enter a link.</span>
            )}
            {showInvalidMessage && (
              <span className={'validator__message'}>
                Please enter a valid link.
              </span>
            )}
          </div>
          <button
            aria-label={'Shorten link'}
            type='submit'
            className={'shorten__button'}
          >
            shorten it!
          </button>
        </form>
      </div>
      {fetchedData && <ShortLink fetchedData={fetchedData} />}
    </div>
  );
};

export default ShortenFormAndLinks;
