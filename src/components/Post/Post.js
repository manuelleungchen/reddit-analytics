import React from 'react';

function Post({ title, score, commentsCount, createdUTC }) {
    const dateTimeInSeconds = new Date(createdUTC * 1000);

    return (
        <tr>
            <td>{title}</td>
            <td>{dateTimeInSeconds.toLocaleDateString()} <br /> {dateTimeInSeconds.toLocaleTimeString()}</td>
            <td>{score}</td>
            <td>{commentsCount}</td>
        </tr>
    )
}

export default Post;