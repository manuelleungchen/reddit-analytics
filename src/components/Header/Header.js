import React from 'react';
import styles from './Header.module.css';

import { useState } from "react";

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleIsNavExpanded = () => { setIsNavExpanded(!isNavExpanded) };

    return (
        <header>
            <nav className={styles.navigation}>
                <a href="#" className={styles.brandName}>
                    Reddit Analytics
                </a>
                <button
                    className={styles.hamburger}
                    onClick={toggleIsNavExpanded}
                >
                    {/* icon from heroicons.com */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className={isNavExpanded ? `${styles.navigationMenu} ${styles.expanded}` : styles.navigationMenu}
                >
                    <ul>
                        <li>
                            <a href="#search" onClick={toggleIsNavExpanded}>Search</a>
                        </li>
                        <li>
                            <a href="#howItWorks" onClick={toggleIsNavExpanded}>How it works</a>
                        </li>
                        <li>
                            <a href="#about" onClick={toggleIsNavExpanded}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;