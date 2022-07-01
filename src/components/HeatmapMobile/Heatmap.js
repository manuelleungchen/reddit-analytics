import React, { useState, useEffect } from 'react';
import styles from './HeatmapMobile.module.css';

function Heatmap({ data }) {

    // Create a state with a matrix of 24 by 7 with 24 rows representing the time and 7 cols representing the days of week. 
    const [heatmapMatrix, setHeatmapMatrix] = useState(Array.from({ length: 24 }, () => Array.from({ length: 7 }, () => 0)))

    useEffect(() => {
        data.data.children.map((post) => {
            const dateTimeInSeconds = new Date(post.data.created * 1000);
            const day = dateTimeInSeconds.getDay();
            const hour = dateTimeInSeconds.getHours();
    
            const matrixCopy = [...heatmapMatrix];
            matrixCopy[hour][day] += 1;
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
            result = "rgb(252, 177, 3)";
        }
        else if (numOfPosts >= maxPostCount/4 && numOfPosts < maxPostCount/2) {
            result = "rgb(252, 136, 3)";
        }
        else if (numOfPosts >= maxPostCount/2 && numOfPosts < maxPostCount/(3/4)) {
            result = "rgb(252, 74, 3)";
        }
        else if (numOfPosts >= maxPostCount/(3/4)) {
            result = "rgb(252, 3, 3)";
        }
        return result;
    };

    const createTableRowData = (days) => {
        return days.map((day, index) => {
            return <td key={index} style={{ backgroundColor: getHeatColor(day) }}>{day}</td>
        })
    };

    return (
        <div className={styles.heatmap}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td className={styles.emptyCell}></td>
                        <th scope='col' >SUN</th>
                        <th scope='col' >MON</th>
                        <th scope='col' >TUE</th>
                        <th scope='col' >WES</th>
                        <th scope='col' >THU</th>
                        <th scope='col' >FRI</th>
                        <th scope='col' >SAT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>12<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[0])}
                    </tr>
                    <tr>
                        <th scope='row'>1<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[1])}
                    </tr>
                    <tr>
                        <th scope='row'>2<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[2])}
                    </tr>
                    <tr>
                        <th scope='row'>3<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[3])}
                    </tr>
                    <tr>
                        <th scope='row'>4<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[4])}
                    </tr>
                    <tr>
                        <th scope='row'>5<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[5])}
                    </tr>
                    <tr>
                        <th scope='row'>6<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[6])}
                    </tr>
                    <tr>
                        <th scope='row'>7<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[7])}
                    </tr>
                    <tr>
                        <th scope='row'>8<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[8])}
                    </tr>
                    <tr>
                        <th scope='row'>9<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[9])}
                    </tr>
                    <tr>
                        <th scope='row'>10<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[10])}
                    </tr>
                    <tr>
                        <th scope='row'>11<br className={styles.linebreak} /> am</th>
                        {createTableRowData(heatmapMatrix[11])}
                    </tr>
                    {/* pm hours */}
                    <tr>
                        <th scope='row'>12<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[12])}
                    </tr>
                    <tr>
                        <th scope='row'>1<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[13])}
                    </tr>
                    <tr>
                        <th scope='row'>2<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[14])}
                    </tr>
                    <tr>
                        <th scope='row'>3<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[15])}
                    </tr>
                    <tr>
                        <th scope='row'>4<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[16])}
                    </tr>
                    <tr>
                        <th scope='row'>5<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[17])}
                    </tr>
                    <tr>
                        <th scope='row'>6<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[18])}
                    </tr>
                    <tr>
                        <th scope='row'>7<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[19])}
                    </tr>
                    <tr>
                        <th scope='row'>8<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[20])}
                    </tr>
                    <tr>
                        <th scope='row'>9<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[21])}
                    </tr>
                    <tr>
                        <th scope='row'>10<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[22])}
                    </tr>
                    <tr>
                        <th scope='row'>11<br className={styles.linebreak} /> pm</th>
                        {createTableRowData(heatmapMatrix[23])}
                    </tr>
                </tbody>
            </table>
            <div className={styles.legend}>
                <span>least popular</span>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="rgb(252, 177, 3)" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="rgb(252, 136, 3)" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="rgb(252, 74, 3)" /></svg>
                <svg height="20" width="20"><circle cx="10" cy="10" r="10" strokeWidth="2" fill="rgb(252, 3, 3)" /></svg>
                <span>most popular</span>
            </div>
            <span>All time are shown in your timezone</span>
        </div>
    )
}

export default Heatmap;