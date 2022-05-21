import React from 'react';
import styles from './Postslist.module.css';

// Import Post component
import Post from '../Post/Post';

function Postslist() {
  return (
    <section className={styles.postslist}>
      <h3>Posts</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time Posted</th>
            <th>Score</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <Post />
        </tbody>
      </table>
    </section>
  )
}

export default Postslist;