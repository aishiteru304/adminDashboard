import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import styles from './Chart.module.scss'
// import { split, combine } from 'shamir-secret-sharing';
import 'chart.js/auto';


const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
        {
            label: 'Sales',
            data: [50, 20, 10, 22, 50, 10, 40],
            backgroundColor: 'rgb(213 231 251)',
            borderColor: 'rgb(213 231 251)',
        },
    ],
};

// Cấu hình của biểu đồ
const options = {
    scales: {
        x: {
            ticks: {
                color: 'rgb(213 231 251)',
            },
        },
        y: {
            type: 'linear',
            beginAtZero: true,
            ticks: {
                color: 'rgb(213 231 251)',
            },
        },
    },
    plugins: {
        legend: {
            display: false, // Ẩn legend (label của dataset)
        },
    },

};

export function ChartBar() {


    // const secretBytes = new TextEncoder().encode('19120700');
    // split(secretBytes, 3, 2)
    //     .then(shares => {
    //         const selectedShares = [shares[1], shares[2]];
    //         combine(selectedShares)
    //             .then((recoveredBytes) => {
    //                 const recoveredSecret = new TextDecoder().decode(recoveredBytes);
    //                 console.log(recoveredSecret);
    //             })
    //     })


    return (
        <div className={styles.wrapChart}><Bar data={data} options={options} className={styles.chart} /></div>
    )
}


export function ChartLine() {

    return (
        <div className={styles.wrapChart}><Line data={data} options={options} className={styles.chart} /></div>
    )
}

