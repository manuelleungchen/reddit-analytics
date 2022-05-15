import React from 'react';
import styles from './Heatmap.module.css';

function Heatmap() {

    let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const getHeatColor = (numOfPosts) => {
        let result;
        if (numOfPosts < 3) {
            result = "rgb(252, 177, 3)";
        }
        else if (numOfPosts >= 3 && numOfPosts < 6) {
            result = "rgb(252, 136, 3)";
        }
        else if (numOfPosts >= 6 && numOfPosts < 8) {
            result = "rgb(252, 74, 3)";
        }
        else if (numOfPosts >= 8) {
            result = "rgb(252, 3, 3)";
        }

        return result;
    };

    const createTableRowData = (data) => {
        return data.map((item, index) => {
            return <td key={index} style={{ backgroundColor: getHeatColor(item) }}>{item}</td>
        })
    };


    return (
        <div className={styles.heatmap}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.emptyCell}></th>
                        <th colSpan={2}>12 am</th>
                        <th colSpan={2}>2 am</th>
                        <th colSpan={2}>4 am</th>
                        <th colSpan={2}>6 am</th>
                        <th colSpan={2}>8 am</th>
                        <th colSpan={2}>10 am</th>
                        <th colSpan={2}>12 pm</th>
                        <th colSpan={2}>2 pm</th>
                        <th colSpan={2}>4 pm</th>
                        <th colSpan={2}>6 pm</th>
                        <th colSpan={2}>8 pm</th>
                        <th colSpan={2}>10 pm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sunday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Monday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Friday</th>
                        {createTableRowData(data)}
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        {createTableRowData(data)}
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
            <p>All time are shown in your timezone: Toronto - Canada</p>
        </div>
    )
}

export default Heatmap;