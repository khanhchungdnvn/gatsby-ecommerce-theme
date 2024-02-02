import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <div class="separator" style="clear: both;"><a href="https://ecowarriortribe.com/wp-content/uploads/2024/01/8-1.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" data-original-height="392" data-original-width="473" src="https://ecowarriortribe.com/wp-content/uploads/2024/01/8-1.png"/></a></div>

  );
};

export default AboutPage;
