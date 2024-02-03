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
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about1111.png'}
          title={`Sydney \n A British brand since 1860`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
             Full Trọn Bộ Tập 1-24 [Lồng Tiếng] Phim Nhặt Được Chồng Là Tổng Tài | Full 1-24 |  Hợp Đồng Hôn Nhân
            </p>
          </div>
        </Container>
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hc6uSZUZzy4g_woc0J3PZqRjdSnmPKN_9ey_A94cP3avhDZD-SqsWpqurmPnn53lXt5-yIilHx2DyjD5xIdTpD4gmQ0LdEGu3rz08U9IGI0yCQYh96HBsBTi45IB_64oxBFZFbRT0Z-V4ygkmrngjYOzxOWxdl3GZ2epgn44OS_qyHD-NnO09gr0s_4/s1600/phim-ngon-tinh-tong-tai-3.jpg" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" data-original-height="387" data-original-width="700" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hc6uSZUZzy4g_woc0J3PZqRjdSnmPKN_9ey_A94cP3avhDZD-SqsWpqurmPnn53lXt5-yIilHx2DyjD5xIdTpD4gmQ0LdEGu3rz08U9IGI0yCQYh96HBsBTi45IB_64oxBFZFbRT0Z-V4ygkmrngjYOzxOWxdl3GZ2epgn44OS_qyHD-NnO09gr0s_4/s1600/phim-ngon-tinh-tong-tai-3.jpg"/></a></div>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about11.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
              
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={'/about21.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about31.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
