import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
         <a href="https://allanand.netlify.app/" target="_blank">Andrew Allan {new Date().getFullYear()}</a >
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
