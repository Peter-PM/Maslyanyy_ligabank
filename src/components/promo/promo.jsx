import React from 'react';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper promo__wrapper--right">
        <p className="promo__caption">Лига Банк</p>
        <span className="promo__description">Кредиты на любой случай</span>
        <a href="/" className="promo__link">Рассчитать кредит</a>
      </div>
      <div className="promo__wrapper promo__wrapper--left">
        <div className="promo__card"></div>
      </div>
    </section>
  );
}

export default Promo;
