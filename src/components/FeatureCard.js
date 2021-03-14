import React from 'react';
// import brandRecognition from '../images/icon-brand-recognition.svg';

const FeatureCard = ({ imgSource, headerText, description }) => {
  return (
    <div className={'features__item flex flex__column flex__jc-c flex__ai-c'}>
      <div className='features__item-image'>
        <img src={imgSource} alt={'Brand Recognition'} />
      </div>
      <h1>{headerText}</h1>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
