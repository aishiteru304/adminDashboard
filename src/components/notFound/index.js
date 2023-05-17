import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

export default function NotFound() {
    return (
        <div className={styles.wrapNotFound}>
            <div className={styles.wrapGif}>
                <div className={styles.gif}>
                    <h2 className={styles.notFoundHeader}>404</h2>
                    <h3 className={styles.notFoundText}>The page you are looking for not available.</h3>
                    <Link to='/' className={styles.goHome}>go to home</Link>
                </div>
            </div>
        </div>
    )
}
