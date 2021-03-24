import React, { useState, useRef } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { css } from '@emotion/core';

import ShortLink from './ShortLink';
import { urlRegex } from '../utils/script';

const spinnerCSS = css`
  margin-top: 0.3rem;
`;

export const FetchDataContext = React.createContext(null);

const ShortenFormAndLinks = () => {
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');

  const endPoint = 'https://api.shrtco.de/v2/shorten';

  const invalidInput = useRef(true);

  function handleUrlInputChange(event) {
    setUrl(event.target.value);

    if (!event.target.value) {
      invalidInput.current = false;
      setShowInvalidMessage(invalidInput.current);
    }
  }

  function handleInvalidLink(event) {
    if (url && urlRegex.test(event.target.value) === false) {
      invalidInput.current = true;
      setShowInvalidMessage(invalidInput.current);
    } else {
      invalidInput.current = false;
      setShowInvalidMessage(invalidInput.current);
    }
  }

  const postUrl = async () => {
    try {
      const response = await fetch(`${endPoint}?url=${url}`);
      const data = await response.json();

      setFetchedData(data.result);
      console.log(data.result);
    } catch (me) {
      // If you can
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.table(invalidInput.current);

    if (invalidInput.current === false) {
      console.log("From the request's scope...😎");
      setFetchedData(null);
      postUrl();
      setUrl('');
      setLoading(true);
    }
  }

  return (
    <FetchDataContext.Provider value={fetchedData}>
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
                onBlur={handleInvalidLink}
                onChange={handleUrlInputChange}
                placeholder={'Shorten a link here...'}
                className={showInvalidMessage ? 'error-case' : ''}
              />
              {showInvalidMessage && (
                <span className={'validator__message'}>
                  Please enter a valid link.
                </span>
              )}
            </div>
            <button
              type={'submit'}
              disabled={url ? false : true}
              aria-label={'Shorten link'}
              className={'shorten__button'}
            >
              shorten it!
            </button>
          </form>
        </div>

        {fetchedData ? (
          <ShortLink />
        ) : (
          <MoonLoader
            color={'#6ADDDD'}
            css={spinnerCSS}
            size={
              Math.min(
                window.innerWidth,
                document.documentElement.clientWidth
              ) < 420
                ? 40
                : 50
            }
            loading={loading}
          />
        )}
      </div>
    </FetchDataContext.Provider>
  );
};

export default ShortenFormAndLinks;
