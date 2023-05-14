import React from 'react'
import styles from './Control.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const colors = ['rgb(227 48 111)', 'rgb(51 51 56)', 'rgb(55 145 238)',
    'rgb(85 174 89)', 'rgb(254 158 26)', 'rgb(233 69 65)'
]

const types = [
    {
        bgColor: 'rgb(47 47 51)',
        name: 'dark',
        color: 'white'
    },
    {
        bgColor: 'transparent',
        name: 'transparent',
        color: 'rgb(52 71 103)'
    },
    {
        bgColor: 'white',
        name: 'white',
        color: 'rgb(52 71 103)'
    }
]

export default function Control() {

    const [bgType, setBgType] = useState([true, false, false])
    const [theme, setTheme] = useState('light')

    const handleClose = () => {
        const control = document.getElementById('Control')
        control.style.right = '-100%'
    }

    const handleColor = (index) => {
        document.documentElement.style.setProperty('--menu-item-color', colors[index]);
    }

    const handleType = (index) => {
        document.documentElement.style.setProperty('--bg-menu-color', types[index].bgColor);
        document.documentElement.style.setProperty('--menu-color', types[index].color);
        const newBgType = [false, false, false]
        newBgType[index] = true
        setBgType(newBgType)
    }

    const handeSelectTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.documentElement.style.setProperty('--bg-color', 'rgb(26 32 53)');
            document.documentElement.style.setProperty('--bg-item-color', 'rgb(32 41 64)');
            document.documentElement.style.setProperty('--text-color', 'rgb(203 205 210)');
            document.documentElement.style.setProperty('--text-dark-color', 'white');

        }
        else {
            setTheme('light')
            document.documentElement.style.setProperty('--bg-color', 'rgb(240 242 245)');
            document.documentElement.style.setProperty('--bg-item-color', 'white');
            document.documentElement.style.setProperty('--text-color', 'rgb(123, 128, 154)');
            document.documentElement.style.setProperty('--text-dark-color', 'rgb(52 71 103)');

        }
    }

    return (
        <div className={styles.wrapControl} id='Control'>
            <h3 className={styles.controlTitle}>material UI configurator</h3>
            <h5 className={styles.controlSubTitle}>See our dashboard options.</h5>
            <AiOutlineClose className={styles.controlClose} onClick={handleClose} />
            <div className='borderBottom'></div>
            <h4 className={styles.sidenavColor}>sidenav colors</h4>
            <div className={styles.colorNav}>
                {
                    colors.map((color, index) => (
                        <div className={styles.colorItem} key={index} style={{ backgroundColor: color }} onClick={() => handleColor(index)}></div>
                    ))
                }
            </div>
            <h4 className={styles.sidenavColor}>sidenav types</h4>
            <h5 className={styles.controlSubTitle}>Choose between different sidenav types.</h5>
            <div className={styles.colorNav}>
                {
                    types.map((type, index) => (
                        <div className={styles.typeItem} key={index} onClick={() => handleType(index)} style={{ backgroundColor: bgType[index] ? 'black' : '', color: bgType[index] ? 'white' : '' }}>{type.name}</div>
                    ))
                }
            </div>

            <div className={styles.wrapTheme}>
                <div className={styles.typeTheme}>light / dark</div>
                <div className={styles.selectTheme} onClick={handeSelectTheme} style={{ backgroundColor: theme === 'light' ? 'rgb(206 212 218)' : 'rgb(50 58 84)' }}>
                    <div className={styles.circleTheme} style={{ left: theme === 'light' ? '3px' : '20px' }}></div>
                </div>
            </div>
        </div>
    )
}
