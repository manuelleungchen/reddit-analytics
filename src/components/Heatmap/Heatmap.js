import React, { useState, useEffect } from 'react';
import styles from './Heatmap.module.css';

function Heatmap({ data }) {

    // Create a state with a matrix of 7 by 24 with 7 rows representing the days of week and 24 cols representing the time. 
    const [heatmapMatrix, setHeatmapMatrix] = useState(Array.from({ length: 7 }, () => Array.from({ length: 24 }, () => 0)))

    useEffect(() => {
        data.data.children.map((post) => {
            const dateTimeInSeconds = new Date(post.data.created * 1000);
            const day = dateTimeInSeconds.getDay();
            const hour = dateTimeInSeconds.getHours();
    
            const matrixCopy = [...heatmapMatrix];
            matrixCopy[day][hour] += 1;
            setHeatmapMatrix(matrixCopy);
        })
    }, [data])

    const getMaxPostCount = (array) => {
        return Math.max(...array.map(subArray => {
            const maximum = Math.max(...subArray);
            return maximum;
        }))
    }

    const getHeatColor = (numOfPosts) => {
        let result;
        const maxPostCount = getMaxPostCount(heatmapMatrix);

        if (numOfPosts < maxPostCount/4) {
            result = "#ffcc00";
        }
        else if (numOfPosts >= maxPostCount/4 && numOfPosts < maxPostCount/2) {
            result = "#A5C686";
        }
        else if (numOfPosts >= maxPostCount/2 && numOfPosts < maxPostCount/(4/3)) {
            result = "#428566";
        }
        else if (numOfPosts >= maxPostCount/(4/3) && numOfPosts < maxPostCount) {
            result = "#365C5E";
        }
        else if (numOfPosts === maxPostCount) {
            result = "#103C5B";
        }
        return result;
    };

    const createTableRowData = (hours) => {
        return hours.map((hour, index) => {
            return <td key={index} style={{ backgroundColor: getHeatColor(hour) }}>{hour}</td>
        })
    };

    return (
        <div className={styles.heatmap}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td className={styles.emptyCell}></td>
                        <th scope='colgroup' colSpan={2}>12<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>2<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>4<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>6<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>8<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>10<br className={styles.linebreak} /> am</th>
                        <th scope='colgroup' colSpan={2}>12<br className={styles.linebreak} /> pm</th>
                        <th scope='colgroup' colSpan={2}>2<br className={styles.linebreak} /> pm</th>
                        <th scope='colgroup' colSpan={2}>4<br className={styles.linebreak} /> pm</th>
                        <th scope='colgroup' colSpan={2}>6<br className={styles.linebreak} /> pm</th>
                        <th scope='colgroup' colSpan={2}>8<br className={styles.linebreak} /> pm</th>
                        <th scope='colgroup' colSpan={2}>10<br className={styles.linebreak} /> pm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>Sunday</th>
                        {createTableRowData(heatmapMatrix[0])}
                    </tr>
                    <tr>
                        <th scope='row'>Monday</th>
                        {createTableRowData(heatmapMatrix[1])}
                    </tr>
                    <tr>
                        <th scope='row'>Tuesday</th>
                        {createTableRowData(heatmapMatrix[2])}
                    </tr>
                    <tr>
                        <th scope='row'>Wednesday</th>
                        {createTableRowData(heatmapMatrix[3])}
                    </tr>
                    <tr>
                        <th scope='row'>Thursday</th>
                        {createTableRowData(heatmapMatrix[4])}
                    </tr>
                    <tr>
                        <th scope='row'>Friday</th>
                        {createTableRowData(heatmapMatrix[5])}
                    </tr>
                    <tr>
                        <th scope='row'>Saturday</th>
                        {createTableRowData(heatmapMatrix[6])}
                    </tr>
                </tbody>
            </table>
            <div className={styles.legend}>
                <span>least popular</span>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="#ffcc00" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="#A5C686" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="#428566" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="#365C5E" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="#103C5B" /></svg>
                <span>most popular</span>
            </div>
            <span>All time are shown in your timezone: Toronto - Canada</span>
        </div>
    )
}

export default Heatmap;