import React from 'react';

const FormLinks = () => {
  return (
    <div className={'container form__container'}>
      <form className={'form__shorten flex flex__column'}>
        <input type='text' placeholder={'Shorten a link here...'} />
        <p className={'validator__message'}>Please add a link</p>
        <button type='submit'>shorten it!</button>
      </form>
    </div>
  );
};

export default FormLinks;
