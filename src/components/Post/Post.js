import React from 'react';
import styles from './Post.module.css';

function Post({ title, score, commentsCount, created, link, deviceSize }) {
    const dateTimeInSeconds = new Date(created * 1000);

    return (
        <>
            {deviceSize.width > 920 ?
            <tr>
                <td className={styles.tbody}><a className={styles.postLink} href={`https://www.reddit.com${link}`} target="_blank" >{title}<span className="sr-only">(Open in new window)</span></a></td>
                <td className={styles.tbody}>{dateTimeInSeconds.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric'})} <br /> {dateTimeInSeconds.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric'})}</td>
                <td className={styles.tbody}>{score}</td>
                <td className={styles.tbody}>{commentsCount}</td>
            </tr>
            :
                <div className={styles.post}>
                    <div className={styles.postLinkDiv}><a className={styles.postLink} href={`https://www.reddit.com${link}`} target="_blank">{title}</a></div>
                    <div className={styles.postDetails}>
                        <span>{dateTimeInSeconds.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} {dateTimeInSeconds.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })}</span>
                        <span>{score} votes</span>
                        <span>{commentsCount} comments</span>
                    </div>
                </div>
            }
        </>
    )
}

export default Post;