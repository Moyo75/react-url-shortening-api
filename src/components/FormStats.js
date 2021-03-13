import React from 'react';
import FormLinks from './FormLinks';
import ShortLink from './ShortLink';

import '../styles/main.scss';

const FormStats = () => {
  return (
    <section className={'form__stats flex flex__column flex__jc-c flex__ai-c'}>
      <FormLinks />
      <ShortLink />
    </section>
  );
};

export default FormStats;
