import React from 'react'
import styles from './Footer.module.scss'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className={`${styles.wrapFooter} row`}>
            <div className={`${styles.wrapCopy} col-md-12`}>
                <AiOutlineCopyrightCircle />
                <span className={styles.copyText}>copyright by <strong style={{ color: 'var(--text-dark-color)', fontWeight: 600 }}>aishiteru304</strong></span>
            </div>
            <div className={`${styles.wrapContract} col-md-12`}>
                <li>creative tim</li>
                <li>about us</li>
                <li>blog</li>
                <li>lisence</li>
            </div>
        </div>
    )
}
