import React from 'react';

const FeatureCard = ({ imgSource, headerText, description }) => {
  return (
    <div className={'features__item flex flex__column flex__jc-c flex__ai-c'}>
      <div className='features__item-image'>
        <img loading={'lazy'} src={imgSource} alt={headerText} />
      </div>
      <h1>{headerText}</h1>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
