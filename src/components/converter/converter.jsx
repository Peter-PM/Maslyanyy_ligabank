import React, { useState, useEffect } from 'react';
import store from '../../store/store';
import { ActionCreator } from '../../store/action';
import dayjs from 'dayjs';
import History from '../history/history';
import styles from './converter.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const BACKEND_URL = 'https://openexchangerates.org/api/historical/';
const APP_ID = '.json?app_id=b9501ac25219483780bf55b8ee16128a';
const RUB = 'RUB';
const USD = 'USD';
const LIMITATION = 7;
const DECIMAL_PLACES = 4;
const TIME_ZONE_OFFSET = 10800000;

function Converter() {

  const currentDate = new Date(Date.now()-TIME_ZONE_OFFSET);

  const [date, setDate] = useState(currentDate);
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setСurrency] = useState('');

  const [myMoney, setMyMoney] = useState({
    oneCurrency: RUB,
    value: '',
  });
  const [buyMoney, setBuyMoney] = useState({
    twoCurrency: USD,
    value: '',
  });

  useEffect(() => {
    fetch(`${BACKEND_URL}${dayjs(date).format('YYYY-MM-DD')}${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        setСurrency(data.rates);
      })
      .catch(() => {
      });
  }, [date]);

  useEffect(() => {
    setBuyMoney(()=> ({
      ...buyMoney,
      value: +(myMoney.value/currency[myMoney.oneCurrency]*currency[buyMoney.twoCurrency]).toFixed(DECIMAL_PLACES) ? +(myMoney.value/currency[myMoney.oneCurrency]*currency[buyMoney.twoCurrency]).toFixed(DECIMAL_PLACES) : '',
    }));
  }, [currency]);

  const handleDateChange = (evt) => {
    setIsVisible(false);
    setDate(evt);
  };

  const handleOneInputChange = (value) => {
    setMyMoney(()=> ({
      ...myMoney,
      value: +value,
    }));
    setBuyMoney(()=> ({
      ...buyMoney,
      value: +(value/currency[myMoney.oneCurrency]*currency[buyMoney.twoCurrency]).toFixed(DECIMAL_PLACES),
    }));
  };

  const handleTwoInputChange = (value) => {
    setBuyMoney(()=> ({
      ...buyMoney,
      value: +value,
    }));

    setMyMoney(()=> ({
      ...myMoney,
      value: +(value*currency[myMoney.oneCurrency]/currency[buyMoney.twoCurrency]).toFixed(DECIMAL_PLACES),
    }));
  };

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    myMoney.value && store.dispatch(ActionCreator.changeHistory({myMoney,buyMoney,date}));
    setMyMoney(()=> ({
      ...myMoney,
      value: 0,
    }));
    setBuyMoney(()=> ({
      ...buyMoney,
      value: 0,
    }));
  };

  return (
    <section className={styles.converter}>
      <h1 className={styles.title}>Конвертер валют</h1>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <label htmlFor="my-money-input" className={styles.caption}>
            У меня есть
            <input
              className={styles.input}
              type="number"
              name="my-money-input"
              id="my-money-input"
              min="0"
              max="1000000"
              placeholder="1000"
              value={myMoney.value}
              onChange={(evt) => {
                handleOneInputChange(evt.target.value);
              }}
            />
          </label>
          <select
            className={styles.select}
            name="my-money"
            id="my-money"
            aria-label="Выбор своей валюты"
            defaultValue={`${RUB}`}
            onChange={(evt) => {
              setMyMoney(()=> ({
                ...myMoney,
                oneCurrency: evt.target.value,
              }));
              setBuyMoney(()=> ({
                ...buyMoney,
                value: +(myMoney.value/currency[evt.target.value]*currency[buyMoney.twoCurrency]).toFixed(DECIMAL_PLACES),
              }));
            }}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>
        <fieldset className={styles.wrapper}>
          <label htmlFor="buy-money-input" className={styles.caption}>
            Хочу приобрести
            <input
              className={styles.input}
              type="number"
              name="buy-money-input"
              id="buy-money-input"
              min="0"
              max="1000000"
              placeholder="13,1234"
              value={buyMoney.value}
              onChange={(evt) => {
                handleTwoInputChange(evt.target.value);
              }}
            />
          </label>
          <select
            className={styles.select}
            name="buy-money"
            id="buy-money"
            aria-label="Выбор валюты для покупки"
            defaultValue={`${USD}`}
            onChange={(evt) => {
              setBuyMoney(()=> ({
                twoCurrency: evt.target.value,
                value: +(myMoney.value/currency[myMoney.oneCurrency]*currency[evt.target.value]).toFixed(DECIMAL_PLACES),
              }));
            }}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>
        <input
          className={`${styles.input} ${styles.inputDate}`}
          type="text"
          aria-label="Выбор даты курса конвертации"
          value={dayjs(date).format('DD.MM.YYYY')}
          onClick={setIsVisible}
          readOnly
        />
        {isVisible && (
          <Calendar
            className={styles.calendar}
            onChange={handleDateChange}
            value={date}
            minDate={dayjs(currentDate).subtract(LIMITATION, 'day').toDate()}
            maxDate={currentDate}
          />
        )}
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Сохранить результат
        </button>
      </form>
      <History/>
    </section>
  );
}

export default Converter;
