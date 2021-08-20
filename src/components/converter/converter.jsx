import React from 'react';
import History from '../history/history';
import styles from './converter.module.scss';

function Converter() {
  return (
    <section className={styles.converter}>
      <h1 className={styles.title}>Конвертер валют</h1>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <label htmlFor="my-money-input" className={styles.caption}>
            У меня есть
            <input className={styles.input} type="text" name="my-money-input" id="my-money-input" placeholder="1000"/>
          </label>
          <select className={styles.select} name="my-money" id="my-money">
            <option value="rub" defaultValue>RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbr">GBR</option>
            <option value="cny">CNY</option>
          </select>
        </fieldset>
        <fieldset className={styles.wrapper}>
          <label htmlFor="buy-money-input" className={styles.caption}>
            Хочу приобрести
            <input className={styles.input} type="text" name="buy-money-input" id="buy-money-input" placeholder="13,1234"/>
          </label>
          <select className={styles.select} name="buy-money" id="buy-money">
            <option value="rub" defaultValue>RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbr">GBR</option>
            <option value="cny">CNY</option>
          </select>
        </fieldset>
        <input className={`${styles.input} ${styles.inputDate}`} type="date"/>
        <button className={styles.button} type="button">Сохранить результат</button>
      </form>
      <History/>
    </section>
  );
}

export default Converter;
