import React from 'react';
import ShortLink from './ShortLink';

const ShortenFormAndLinks = () => {
  return (
    <div
      className={
        'container form__links__container flex flex__column flex__jc-c flex__ai-c'
      }
    >
      <div className={'form__container'}>
        <form className={'form__shorten flex flex__column'}>
          <input type='text' placeholder={'Shorten a link here...'} />
          <p className={'validator__message'}>Please add a link</p>
          <button aria-label={'Shortened link'} type='submit'>
            shorten it!
          </button>
        </form>
      </div>
      <ShortLink />
    </div>
  );
};

export default ShortenFormAndLinks;
