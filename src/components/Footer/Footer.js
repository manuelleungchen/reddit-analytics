import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.bg_color_red}>
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-2 my-3 mx-3 border-top">
        <div className="d-flex align-items-center">
          <span className="text-muted">&copy; 2022 Copyright</span>
        </div>
        <ul className="nav justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin" /><span class="sr-only">(Opens in a new window)</span></a></li>
          <li class="ms-3"><a class="text-muted" href="https://github.com/manuelleungchen" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" /><span class="sr-only">(Opens in a new window)</span></a></li>
          <li class="ms-3"><a class="text-muted" href="https://discord.com/users/834973242548027403" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-discord" /><span class="sr-only">(Opens in a new window)</span></a></li>
          <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/mleungc/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" /><span class="sr-only">(Opens in a new window)</span></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
