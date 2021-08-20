import React from 'react';
import styles from './history.module.scss';

function History() {

  return (
    <section className={styles.history}>
      <h2 className={styles.title}>История конвертаций</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
        <li className={styles.item}>
          <span className={styles.date}>25.11.2020</span>
          <span className={styles.money}>1000 RUB</span>
          <span className={styles.result}>13,1234 USD</span>
        </li>
      </ul>

      <button className={styles.button} type="button">Очистить историю</button>
    </section>
  );
}

export default History;
