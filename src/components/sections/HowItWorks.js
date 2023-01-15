import React from 'react';
import styles from './HowItWorks.module.css';


function about() {
    return (
        <section className={styles.section} id='howItWorks'>
            <h2>How does it work</h2>
            <ul>
                <li>We find the 500 top posts from the past year for a subreddit.</li>
                <li>The data is visulized in a heatmap grouped by weekday and hour of the day.</li>
                <li>See immediately when to submit your reddit post.</li>
            </ul>
        </section>
    )
}

export default about