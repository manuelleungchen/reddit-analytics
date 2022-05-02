import React from 'react';
import styles from './Header.module.css';


function Header() {
  return (
    <header>
        <p>Reddit Analytics</p>
        <nav>
            <ul>
                <li>Search</li>
                <li>How it works</li>
                <li>About</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;