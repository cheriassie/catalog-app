import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Каталог</h1>
      </div>
      <nav className={styles.nav}>
        <button className="compare-button">Сравнение</button>
        <button className="profile-button">Личный кабинет</button>
      </nav>
    </header>
  );
};

export default Header;
