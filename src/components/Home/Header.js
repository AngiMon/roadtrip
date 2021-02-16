import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
  const { t } = useTranslation();
    return (
      <header id="header">
        <h1>
          <a href="/">
            { t("app").title } 
          </a>
        </h1>
        <nav className="main">
          <ul>
            <li className="menu">
              <a className="fa-bars" href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;