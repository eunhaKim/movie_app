import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className='about__container'>
      <span>About this page: </span>
      <span>I build it because I love movies.</span>
    </div>
  );
}

export default About;