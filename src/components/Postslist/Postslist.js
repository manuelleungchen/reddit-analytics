import React from 'react';
import styles from './Postslist.module.css';

// Import Post component
import Post from '../Post/Post';

function Postslist({ data }) {
    return (
        <section className={styles.postslist}>
            <h3>Posts</h3>
            <table>
                <thead>
                    <tr>
                        <th scope='col' className={styles.tableHeaderTitle} >Title</th>
                        <th scope='col' className={styles.tableHeaderCreated}>Time Posted</th>
                        <th scope='col' className={styles.tableHeaderScore}>Score</th>
                        <th scope='col' className={styles.tableHeaderComments}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.children.slice(0, 5).map((post, index) => <Post key={index} title={post.data.title} score={post.data.score} commentsCount={post.data.num_comments} created={post.data.created} createdUTC={post.data.created_utc} />)}
                </tbody>
            </table>
        </section>
    )
}

export default Postslist;