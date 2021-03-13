import React from 'react';

const FormLinks = () => {
  return (
    <div>
      <form className={'form__shorten'}>
        <input type='text' placeholder={'shorten a link here...'} />
        <button type='submit'>shorten it!</button>
      </form>
    </div>
  );
};

export default FormLinks;
