import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Каталог</h1>
      </div>
      <nav className="nav">
        <button className="compare-button">Сравнение</button>
        <button className="profile-button">Личный кабинет</button>
      </nav>
    </header>
  );
};

export default Header;
