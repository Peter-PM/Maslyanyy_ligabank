import React from 'react';

function Header() {
  return (
    <header className="page-header">
      <a href="/" className="page-header__logo-link page-header__link">
        <svg className="page-header__logo-svg" width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="#2C36F2"/>
          <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z" fill="#2C36F2"/>
          <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="#2C36F2"/>
          <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z" fill="#2C36F2"/>
          <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2"/>
          <path d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415" stroke="#F6F7FF"/>
        </svg>
        ЛИГА Банк
      </a>
      <nav className="page-header__nav">
        <ul className="page-header__nav-list">
          <li className="page-header__nav-item"><a href="/" className="page-header__nav-link page-header__link">Услуги</a></li>
          <li className="page-header__nav-item"><a href="/" className="page-header__nav-link page-header__link">Рассчитать кредит</a></li>
          <li className="page-header__nav-item"><a href="/" className="page-header__nav-link page-header__nav-link--active page-header__link">Конвертер валют</a></li>
          <li className="page-header__nav-item"><a href="/" className="page-header__nav-link page-header__link">Контакты</a></li>
          <li className="page-header__nav-item"><a href="/" className="page-header__nav-link page-header__link">Задать вопрос</a></li>
        </ul>
      </nav>
      <a href="/" className="page-header__enter-link page-header__link">Войти в Интернет-банк</a>
    </header>
  );
}

export default Header;
