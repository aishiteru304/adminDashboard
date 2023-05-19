import React, { useState } from 'react'
import styles from './Notifications.module.scss'
import { AiOutlineCloseCircle, AiOutlineCheck } from 'react-icons/ai'
import { Button } from '@mui/material';


const alerts = [
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(236, 64, 122)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(107 115 129)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(93 180 97)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(236 74 71)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(254 160 27)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(58 148 238)'
    },
    {
        text: 'A simple primary alert with an example link. Give it a click if you like.',
        bgColor: 'rgb(54 54 60)'
    }
]

const notiBtns = [
    {
        text: 'success notification',
        bgColor: 'rgb(93 180 97)'
    },
    {
        text: 'info notification',
        bgColor: 'rgb(58 148 238)'
    },
    {
        text: 'warning notification',
        bgColor: 'rgb(254 160 27)'
    },
    {
        text: 'error notification',
        bgColor: 'rgb(236 74 71)'
    }
]

export default function Notifications() {

    const [isNotiContent, setIsNotiContent] = useState([false, false, false, false])

    const handleDelete = (index) => {
        const alertItem = document.getElementById(`alertItem${index}`)
        alertItem.remove()
    }

    const handleNoti = (index) => {
        const newState = [false, false, false, false]
        newState[index] = true
        setIsNotiContent(newState)
        setTimeout(() => setIsNotiContent([false, false, false, false]), 5000)
    }

    return (
        <div className={styles.wrapNotifications}>
            <div className={styles.wrapNotiItem}>
                <h3 className={styles.notiItemHeader}>alert</h3>

                {
                    alerts.map((alert, index) => (
                        <div id={`alertItem${index}`} className={styles.alertItem} key={index} style={{ background: alert.bgColor }}>{alert.text}
                            <div className={styles.alertItemDelete} onClick={() => handleDelete(index)}><AiOutlineCloseCircle /></div>
                        </div>
                    ))
                }

            </div>

            <div className={styles.wrapNotiItem}>
                <h3 className={styles.notiItemHeader}>notifications</h3>
                <h5 className={styles.notiItemSubHeader}>Notifications on this page use Toasts from Bootstrap. Read more details here.</h5>

                <div className='row'>
                    {
                        notiBtns.map((btn, index) => (
                            <div className='col-3 col-sm-6' key={index} onClick={() => handleNoti(index)}>
                                <div className={styles.wrapNotiItemBtn}>
                                    <Button className={styles.notiItemBtn} style={{ backgroundColor: btn.bgColor }}>{btn.text}</Button>
                                </div>

                                {
                                    isNotiContent[index] && <div className={styles.notiContent}>
                                        <div className={styles.notiContentHeader} style={{ color: btn.bgColor }}>
                                            <AiOutlineCheck />
                                            <h4>Material Dashboard</h4>
                                            <h5 style={{ color: 'var(--text-color)', fontWeight: 400 }}>11 min ago</h5>
                                            <AiOutlineCloseCircle />
                                        </div>
                                        <div className='borderBottom'></div>
                                        <h5 className={styles.notiMessage}>Hello, World! This is a message notification.</h5>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
