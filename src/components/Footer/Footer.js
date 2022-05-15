import React from 'react';
import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faDiscord,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <span>&copy; 2022 Copyright</span>
                </div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} /><span className={styles.srOnly}>(Opens in a new window)</span></a></li>
                    <li><a href="https://github.com/manuelleungchen" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /><span className={styles.srOnly}>(Opens in a new window)</span></a></li>
                    <li><a href="https://discord.com/users/834973242548027403" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} /><span className={styles.srOnly}>(Opens in a new window)</span></a></li>
                    <li><a href="https://www.instagram.com/mleungc/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} /><span className={styles.srOnly}>(Opens in a new window)</span></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
