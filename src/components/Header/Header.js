import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/reddit-analytics-logo.png';

function Header() {
    return (
        <header>
            <nav className={styles.navigation}>
                <Link to="/" className={styles.brandName}>
                    <img src={logo} alt="Reddit Analytics Logo" />
                    <h1>Reddit Analytics</h1>
                </Link>
                <ul className={styles.navigationLinks}>
                    <li>
                        <Link to="/how-it-works">How it works</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;