import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { ActionCreator } from '../../store/action';
import styles from './history.module.scss';

function History(props) {

  const {convertHistory, deleteHistory} = props;

  const hendleDeleteButton = () => {
    deleteHistory();
  };

  return (
    <section className={styles.history}>
      <h2 className={styles.title}>История конвертаций</h2>
      <ul className={styles.list}>
        {convertHistory.map((item) => (
          <li className={styles.item} key={nanoid()}>
            <span className={styles.date}>{dayjs(item.date).format('DD.MM.YYYY')}</span>
            <span className={styles.money}>{`${item.myMoney.value} ${item.myMoney.oneCurrency}`}</span>
            <span className={styles.result}>{`${item.buyMoney.value} ${item.buyMoney.twoCurrency}`}</span>
          </li>),
        )}
      </ul>

      <button
        className={styles.button}
        type="button"
        onClick={hendleDeleteButton}
      >
        Очистить историю
      </button>
    </section>
  );
}

History.propTypes = {
  convertHistory: PropTypes.array.isRequired,
  deleteHistory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  convertHistory: state.convertHistory,
});

const mapDispatchToProps = (dispatch) => ({
  deleteHistory() {
    dispatch(ActionCreator.deleteHistory());
  },
});

export {History};
export default connect(mapStateToProps, mapDispatchToProps)(History);
