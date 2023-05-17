import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiFillSetting, AiFillBell, AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { MdMail } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

const notifications = [
    {
        icon: <MdMail />,
        text: 'Check new messages'
    },
    {
        icon: <FaShoppingCart />,
        text: 'Payment successfully'
    }
]

export default function Header() {

    const [isShowMenu, setIsShowMenu] = useState(false)
    const [locationHeader, setLocationHeader] = useState('Dashbroad')
    const [isShowNoti, setIsShowNoti] = useState(false)
    const location = useLocation()
    const pathname = decodeURIComponent(location.pathname)

    useEffect(() => {
        pathname === '/' ? setLocationHeader('Dashboard') : setLocationHeader(pathname.split('/')[1])
    }, [pathname])

    const handleShowMenu = () => {
        const menu = document.getElementById('Menu')
        if (isShowMenu) {
            menu.style.left = '-100%'
            menu.style.opacity = 0

        }
        else {
            menu.style.left = 0
            menu.style.opacity = 1
        }

        setIsShowMenu(!isShowMenu)

    }

    const handleShowControl = () => {
        const control = document.getElementById('Control')
        control.style.right = 0
    }

    const handleNotification = () => {
        setIsShowNoti(!isShowNoti)
    }


    return (
        <div className={styles.wrapHeader}>
            <div className={styles.left}>
                <div className={styles.wrapLogo}>
                    <li><Link to='/'><AiFillHome /></Link></li>
                    <li>{pathname}</li>
                </div>
                <h6 className={styles.location}>{locationHeader}</h6>
            </div>
            <div className={`${styles.headerRight} col-sm-12`}>
                <div className={styles.wrapInput}>
                    <input className={styles.headerInput}></input>
                    <label className={styles.labelInput}>Search here</label>
                </div>

                <div className={styles.wrapHeaderIcon}>
                    <li><RxAvatar /></li>
                    {!isShowMenu && <li className={styles.display} onClick={handleShowMenu}><AiOutlineMenuFold /></li>}
                    {isShowMenu && <li className={styles.display} onClick={handleShowMenu}><AiOutlineMenu /></li>}
                    <li><AiFillSetting onClick={handleShowControl} /></li>
                    <li className={styles.notificationIcon} onClick={handleNotification}><AiFillBell />
                        <div onClick={e => e.stopPropagation()} className={styles.wrapNotification} style={{ width: isShowNoti ? '280px' : 0, height: isShowNoti ? 'max-content' : 0, opacity: isShowNoti ? 1 : 0 }}>
                            {
                                notifications.map((notification, index) => (
                                    <div className={styles.wrapItemNoti} key={index}>
                                        {isShowNoti && notification.icon}
                                        {isShowNoti && <h5 className={styles.itemNotiText}> {notification.text}</h5>}
                                    </div>

                                ))
                            }

                        </div>

                        {isShowNoti && <div className={styles.cover}></div>}
                    </li>
                </div>
            </div>
        </div>
    )
}
