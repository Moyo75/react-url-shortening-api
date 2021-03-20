import React from 'react';

import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';
import FeatureCard from './FeatureCard';

const cardsDataList = [
  {
    imgSource: brandRecognition,
    headerText: 'Brand Recognition',
    description: `Boost your brand recognition with each click. Generic links don't mean a
    thing. Branded links help instill confidence in your content.`
  },
  {
    imgSource: detailedRecords,
    headerText: 'Detailed Records',
    description: `Gain insights into who is clicking your site. Knowing when and where people engage your content helps inform better decisions.`
  },
  {
    imgSource: fullyCustomizable,
    headerText: 'Fully Customizable',
    description: `Improve brand awareness and content discovrability through customizable links, superchanging audience engagement.`
  }
];

const FeatureCardList = () => {
  return (
    <div
      className={
        'container feature__cards-list flex flex__column flex__jc-c flex__ai-c'
      }
    >
      {cardsDataList.map(({ imgSource, headerText, description }) => (
        <FeatureCard
          key={headerText}
          imgSource={imgSource}
          headerText={headerText}
          description={description}
        />
      ))}
    </div>
  );
};

export default FeatureCardList;
