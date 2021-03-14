import React from 'react';

import ShortenFormAndLinks from './ShortenFormAndLinks';
import FormStatsText from './FormStatsText';

import '../styles/main.scss';
// import FeatureCard from './FeatureCard';
import FeatureCardList from './FeatureCardList';

const FormStats = () => {
  return (
    <section className={'form__stats flex flex__column flex__jc-c flex__ai-c'}>
      <ShortenFormAndLinks />
      <FormStatsText />
      <FeatureCardList />
    </section>
  );
};

export default FormStats;
