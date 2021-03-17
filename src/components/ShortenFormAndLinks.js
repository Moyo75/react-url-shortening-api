import React, { useState } from 'react';
import ShortLink from './ShortLink';

import { urlRegex } from '../utils/script';

// https://api.shrtco.de/v2/

const ShortenFormAndLinks = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  // const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');

  function handleUrlInputChange(event) {
    setUrl(event.target.value);
  }

  function handleErrorMessage() {
    if (!urlRegex.test(url)) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }
  }

  async function postUrl() {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log('Success: ', data))
      .catch((error) => console.log('Error: ', error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleErrorMessage();
    if (showErrorMessage === false) {
      console.log(url);
      postUrl();
      setUrl('');
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
              Please add a valid link.
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
