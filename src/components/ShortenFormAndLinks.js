import React, { useState, useRef } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

import ShortLink from './ShortLink';
import { urlRegex, fetchWithTimeout } from '../utils/script';

const spinnerCSS = css`
  margin-top: 1rem;
`;

const ShortenFormAndLinks = () => {
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [noInputErrorMessage, setNoInputErrorMessage] = useState(false);
  const [delayMessage, setDelayMessage] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const endPoint = 'https://api.shrtco.de/v2/shorten';

  const invalidInput = useRef(false);
  const noInput = useRef(false);

  function handleUrlInputChange(event) {
    setUrl(event.target.value);
  }

  function handleFormInput(event) {
    if (event.target.value === '') {
      noInput.current = true;
      invalidInput.current = false;

      setNoInputErrorMessage(noInput.current);
      setShowInvalidMessage(invalidInput.current);
    } else {
      noInput.current = false;
      setNoInputErrorMessage(noInput.current);

      handleInvalidLink(event.target.value);
    }
  }

  function handleInvalidLink(link) {
    if (urlRegex.test(link) === false) {
      invalidInput.current = true;
      setShowInvalidMessage(invalidInput.current);
    } else {
      invalidInput.current = false;
      setShowInvalidMessage(invalidInput.current);
    }
  }

  const postUrl = async () => {
    setFetchedData(null);
    setLoading(true);

    const requestTimeout = 15000;

    try {
      const response = await fetchWithTimeout(`${endPoint}?url=${url}`, {
        timeout: requestTimeout
      });
      const data = await response.json();

      setFetchedData(data.result);
      console.log(data.result);
    } catch (error) {
      if (error.name === 'AbortError') {
        setDelayMessage(true);
        setTimeout(() => {
          setDelayMessage(false);
        }, 5000);
      }
    }

    setLoading(false);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (noInput.current === false && invalidInput.current === false) {
      setUrl('');
      postUrl();
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
              type='text'
              value={url}
              onChange={handleUrlInputChange}
              onBlur={handleFormInput}
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
      {delayMessage && (
        <span className={'delay__message'}>
          Request took too long. Try again.
        </span>
      )}
      {fetchedData ? (
        <ShortLink fetchedData={fetchedData} />
      ) : (
        <ScaleLoader
          css={spinnerCSS}
          loading={loading}
          color={'#6ADDDD'}
          size={document.documentElement.clientWidth > 450 ? 50 : 40}
        />
      )}
    </div>
  );
};

export default ShortenFormAndLinks;
