import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'Friends of Sydney: Flora Fricker'}
              image={'/blogFeatured.png'}
              alt={''}
            >

              <div className={styles.content}>
                <p className={styles.excerpt}>
                 Full Trọn Bộ Tập 1-24 [Lồng Tiếng] Phim Nhặt Được Chồng Là Tổng Tài | Full 1-24 |  Hợp Đồng Hôn Nhân
                </p>
               
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
