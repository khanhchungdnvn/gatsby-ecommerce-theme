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
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hc6uSZUZzy4g_woc0J3PZqRjdSnmPKN_9ey_A94cP3avhDZD-SqsWpqurmPnn53lXt5-yIilHx2DyjD5xIdTpD4gmQ0LdEGu3rz08U9IGI0yCQYh96HBsBTi45IB_64oxBFZFbRT0Z-V4ygkmrngjYOzxOWxdl3GZ2epgn44OS_qyHD-NnO09gr0s_4/s1600/phim-ngon-tinh-tong-tai-3.jpg" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" data-original-height="387" data-original-width="700" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hc6uSZUZzy4g_woc0J3PZqRjdSnmPKN_9ey_A94cP3avhDZD-SqsWpqurmPnn53lXt5-yIilHx2DyjD5xIdTpD4gmQ0LdEGu3rz08U9IGI0yCQYh96HBsBTi45IB_64oxBFZFbRT0Z-V4ygkmrngjYOzxOWxdl3GZ2epgn44OS_qyHD-NnO09gr0s_4/s1600/phim-ngon-tinh-tong-tai-3.jpg"/></a></div>

  );
};

export default AboutPage;
