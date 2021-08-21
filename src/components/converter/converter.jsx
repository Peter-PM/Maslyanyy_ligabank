import React, {useState} from 'react';
import dayjs from 'dayjs';
import History from '../history/history';
import styles from './converter.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Converter() {
  const currentDate = new Date();

  const [date, setDate] = useState(currentDate);
  const [isVisible, setIsVisible] = useState(false);
  const [convertHistory, setHistory] = useState(new Array(10));
  const [myMoney, setMyMoney] = useState({
    oneCurrency: 'RUB',
    value: 0,
  });
  const [buyMoney, setBuyMoney] = useState({
    twoCurrency: 'USD',
    value: 0,
  });

  const changeDate = (evt) => {
    setIsVisible(false);
    setDate(evt);
  };


  const oneInput = document.querySelector('#my-money-input') ? document.querySelector('#my-money-input') : false;
  const twoInput = document.querySelector('#buy-money-input') ? document.querySelector('#buy-money-input') : false;

  const changeOneInput = (evt) => {
    setMyMoney(()=> ({
      ...myMoney,
      value: +evt.target.value,
    }));
    setBuyMoney(()=> ({
      ...buyMoney,
      value: +oneInput.value*2,
    }));
  };

  const changeTwoInput = (evt) => {
    setBuyMoney(()=> ({
      ...buyMoney,
      value: +evt.target.value,
    }));

    setMyMoney(()=> ({
      ...myMoney,
      value: twoInput.value/2,
    }));

  };

  console.log(myMoney, buyMoney, oneInput, twoInput);

  return (
    <section className={styles.converter}>
      <h1 className={styles.title}>Конвертер валют</h1>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <label htmlFor="my-money-input" className={styles.caption}>
            У меня есть
            <input
              className={styles.input}
              type="text"
              name="my-money-input"
              id="my-money-input"
              placeholder="1000"
              value={myMoney.value}
              onChange={(evt) => {
                changeOneInput(evt);
              }}
            />
          </label>
          <select
            className={styles.select}
            name="my-money"
            id="my-money"
            defaultValue="RUB"
            onChange={(evt) => {
              setMyMoney(()=> ({
                ...myMoney,
                oneCurrency: evt.target.value,
              }));
            }}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>
        <fieldset className={styles.wrapper}>
          <label htmlFor="buy-money-input" className={styles.caption}>
            Хочу приобрести
            <input
              className={styles.input}
              type="text"
              name="buy-money-input"
              id="buy-money-input"
              placeholder="13,1234"
              value={buyMoney.value}
              onChange={(evt) => {
                changeTwoInput(evt);
              }}
            />
          </label>
          <select
            className={styles.select}
            name="buy-money"
            id="buy-money"
            defaultValue="USD"
            onChange={(evt) => {
              setBuyMoney(()=> ({
                ...buyMoney,
                twoCurrency: evt.target.value,
              }));
            }}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </fieldset>
        <input
          className={`${styles.input} ${styles.inputDate}`}
          type="text"
          value={dayjs(date).format('DD.MM.YYYY')}
          onClick={setIsVisible}
          readOnly
        />
        {isVisible && (
          <Calendar
            className={styles.calendar}
            onChange={changeDate}
            value={date}
            minDate={dayjs(currentDate).subtract(7, 'day').toDate()}
            maxDate={currentDate}
          />
        )}
        <button className={styles.button} type="button">Сохранить результат</button>
      </form>
      <History/>
    </section>
  );
}

export default Converter;
