import React, { useState, useRef } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';

import ShortLink from './ShortLink';
import { urlRegex } from '../utils/script';

const spinnerCSS = css`
  margin-top: 1rem;
`;

const ShortenFormAndLinks = () => {
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [noInputErrorMessage, setNoInputErrorMessage] = useState(false);

  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const endPoint = 'https://api.shrtco.de/v2/shorten';

  const invalidInput = useRef(true);
  const noInput = useRef(true);

  function handleUrlInputChange(event) {
    setUrl(event.target.value);

    noInput.current = false;
    setNoInputErrorMessage(noInput.current);

    // invalidInput.current = false;
    // setShowInvalidMessage(invalidInput.current);
  }

  function handleFormFocus(event) {
    if (event.target.value) {
      noInput.current = false;
      setNoInputErrorMessage(noInput.current);
    }
  }

  function handleInvalidLink(input) {
    if (urlRegex.test(input) === false) {
      invalidInput.current = true;
      setShowInvalidMessage(invalidInput.current);
    } else {
      invalidInput.current = false;
      setShowInvalidMessage(invalidInput.current);
    }
  }

  function handleFormInput(event) {
    if (event.target.value === '') {
      noInput.current = true;
      setNoInputErrorMessage(noInput.current);

      invalidInput.current = false;
      setShowInvalidMessage(invalidInput.current);
    } else {
      noInput.current = false;
      setNoInputErrorMessage(noInput.current);
      handleInvalidLink(event.target.value);
    }
  }

  const postUrl = async () => {
    try {
      const response = await fetch(`${endPoint}?url=${url}`);
      const data = await response.json();

      setFetchedData(data.result);
      console.log(data.result);
    } catch (me) {
      // If you can...🏃‍♂
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.value === '') {
      invalidInput.current = true;
      setNoInputErrorMessage(invalidInput.current);
    }

    console.table(noInput.current, invalidInput.current);

    if (noInput.current === false && invalidInput.current === false) {
      setFetchedData(null);
      postUrl();
      setUrl('');
      setLoading(true);
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
              onBlur={handleFormInput}
              onFocus={handleFormFocus}
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
            type={'submit'}
            aria-label={'Shorten link'}
            className={'shorten__button'}
          >
            shorten it!
          </button>
        </form>
      </div>

      {fetchedData ? (
        <ShortLink fetchedData={fetchedData} />
      ) : (
        <PuffLoader
          color={'#6ADDDD'}
          css={spinnerCSS}
          size={
            Math.min(window.innerWidth, document.documentElement.clientWidth) <
            420
              ? 40
              : 60
          }
          loading={loading}
        />
      )}
    </div>
  );
};

export default ShortenFormAndLinks;
