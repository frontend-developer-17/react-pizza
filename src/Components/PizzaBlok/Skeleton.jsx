import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#eeebe7"
    foregroundColor="#bdc2c0"
    {...props}>
    <circle cx="134" cy="128" r="116" />
    <rect x="-12" y="255" rx="9" ry="9" width="291" height="27" />
    <rect x="-4" y="302" rx="14" ry="14" width="280" height="87" />
    <rect x="-2" y="408" rx="9" ry="9" width="90" height="30" />
    <rect x="138" y="406" rx="23" ry="23" width="148" height="46" />
  </ContentLoader>
);

export default Skeleton;
