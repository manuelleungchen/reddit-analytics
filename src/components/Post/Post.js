import React from 'react';
import styles from './Post.module.css';

function Post({ title, score, commentsCount, created, link }) {
    const dateTimeInSeconds = new Date(created * 1000);

    return (
        <tr>
            <td className={styles.tbody}><a href={`https://www.reddit.com${link}`} target="_blank" >{title}<span class="sr-only">(Open in new window)</span></a></td>
            <td className={styles.tbody}>{dateTimeInSeconds.toLocaleDateString()} <br /> {dateTimeInSeconds.toLocaleTimeString()}</td>
            <td className={styles.tbody}>{score}</td>
            <td className={styles.tbody}>{commentsCount}</td>
        </tr>
    )
}

export default Post;