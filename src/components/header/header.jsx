import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';

function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><a href="/" className={styles.link}>Услуги</a></li>
          <li className={styles.item}><a href="/" className={styles.link}>Рассчитать кредит</a></li>
          <li className={styles.item}><a href="/" className={`${styles.link} ${styles.linkActive}`}>Конвертер валют</a></li>
          <li className={styles.item}><a href="/" className={styles.link}>Контакты</a></li>
          <li className={styles.item}><a href="/" className={styles.link}>Задать вопрос</a></li>
        </ul>
      </nav>
      <a href="/" className={`${styles.link} ${styles.enter}`}>Войти в Интернет-банк</a>
    </header>
  );
}

export default Header;
