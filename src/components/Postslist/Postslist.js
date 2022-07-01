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
                        <th className={styles.thead} scope='col' id={styles.tableHeaderTitle} >Title</th>
                        <th className={styles.thead} scope='col' id={styles.tableHeaderCreated}>Time Posted</th>
                        <th className={styles.thead} scope='col' id={styles.tableHeaderScore}>Score</th>
                        <th className={styles.thead} scope='col' id={styles.tableHeaderComments}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.children.slice(0, 5).map((post, index) => <Post key={index} title={post.data.title} score={post.data.score} commentsCount={post.data.num_comments} created={post.data.created} />)}
                </tbody>
            </table>
        </section>
    )
}

export default Postslist;