import React, { useState, useRef } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
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
  const [url, setUrl] = useState('');

  const endPoint = 'https://api.shrtco.de/v2/shorten';

  const invalidInput = useRef(false);
  const noInput = useRef(false);

  function handleUrlInputChange(event) {
    setUrl(event.target.value);

    invalidInput.current = false;
    noInput.current = false;

    setNoInputErrorMessage(noInput.current);
    setShowInvalidMessage(invalidInput.current);
  }

  function handleNoInput() {
    if (url === '') {
      noInput.current = true;
      setNoInputErrorMessage(noInput.current);
    } else {
      noInput.current = false;
      setNoInputErrorMessage(noInput.current);
    }
  }

  function handleInvalidLink() {
    if (urlRegex.test(url) === false) {
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
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleNoInput();

    if (noInput.current === false) {
      console.log(url);
      handleInvalidLink();
    }

    console.table(noInput.current, invalidInput.current);

    if (noInput.current === false && invalidInput.current === false) {
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
      {/* <FadeLoader color={'#6ADDDD'} css={spinnerCSS} /> */}
      {fetchedData && <ShortLink fetchedData={fetchedData} />}
    </div>
  );
};

export default ShortenFormAndLinks;
