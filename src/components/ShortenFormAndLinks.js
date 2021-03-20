import React, { useState } from 'react';
import ShortLink from './ShortLink';

import { urlRegex } from '../utils/script';

const ShortenFormAndLinks = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');
  const endPoint = 'https://api.shrtco.de/v2/shorten';

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
              required
              type='text'
              value={url}
              onChange={handleUrlInputChange}
              placeholder={'Shorten a link here...'}
              className={showErrorMessage ? 'error-case' : null}
            />
            {showErrorMessage && (
              <span className={'validator__message'}>
                Please add a valid link.
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
