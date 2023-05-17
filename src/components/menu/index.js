import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import { MdDashboard, MdOutlineTableView, MdNotificationsNone } from 'react-icons/md'
import { RiBillFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { GoSignIn, GoSignOut } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom'

const menuItem = [
    {
        icon: <MdDashboard />,
        title: 'dashboard'
    },
    {
        icon: <MdOutlineTableView />,
        title: 'tables'
    },
    {
        icon: <RiBillFill />,
        title: 'billing'
    },
    {
        icon: <MdNotificationsNone />,
        title: 'notifications'
    },
    {
        icon: <CgProfile />,
        title: 'profile'
    },
    {
        icon: <GoSignIn />,
        title: 'sign in'
    },
    {
        icon: <GoSignOut />,
        title: 'sign out'
    }
]

export default function Menu() {
    const [selected, setSelected] = useState([false, false, false, false, false, false, false])
    const location = useLocation()
    useEffect(() => {
        const pathname = decodeURIComponent(location.pathname)
        if (pathname === '/') handleSelect(0)
        else {
            const index = menuItem.findIndex(item => item.title === pathname.split('/')[1])
            if (index === -1) setSelected([false, false, false, false, false, false, false])
            else handleSelect(index)
        }
    }, [location])

    const handleSelect = (index) => {
        const newSelected = [false, false, false, false, false, false, false]
        newSelected[index] = true
        setSelected(newSelected)
    }
    return (
        <div className={styles.wrapMenu} id='Menu'>
            <div className={styles.header}>
                <h3 className={styles.title}>material dashboard</h3>
            </div>
            <div className={`borderBottom ${styles.borderMaterial}`}></div>
            {
                menuItem.map((item, index) => (
                    <Link to={`adminDashboard/${item.title}`} className={styles.menuItem} key={index} style={{ backgroundColor: selected[index] ? 'var(--menu-item-color)' : '', color: 'var(--menu-color)' }}>
                        {item.icon}
                        <h4 className={styles.menuItemTitle}>{item.title}</h4>
                    </Link>
                ))
            }

            <Link className={styles.upgrate} to='/' style={{ backgroundColor: 'var(--menu-item-color)' }}>upgrate to pro</Link>


        </div>
    )
}
