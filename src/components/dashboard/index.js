import React from 'react'
import styles from './Dashboard.module.scss'
import { TbBrandBooking } from 'react-icons/tb'
import { RiBarChart2Fill, RiBillLine } from 'react-icons/ri'
import { CiBank, CiShop } from 'react-icons/ci'
import { SlUserFollow } from 'react-icons/sl'
import { AiOutlineClockCircle, AiOutlineCheck, AiOutlineArrowUp, AiOutlineBell, AiOutlineShoppingCart, AiOutlineWifi } from 'react-icons/ai'
import { IoMdKey } from 'react-icons/io'
import { SiAdobexd } from 'react-icons/si'
import { GiPlatform } from 'react-icons/gi'
import { CgShapeRhombus } from 'react-icons/cg'
import { ChartBar, ChartLine } from '../chart'


const tableDashboard = [
    {
        icon: <SiAdobexd />,
        company: 'Material UI XD Version',
        budget: '$14,000',
        members: [
            {
                img: '/img/ryanAvatar.jpg',
                name: 'Ryan Tomspon'
            },
            {
                img: '/img/rominaAvatar.jpg',
                name: 'Romina Hadid'
            },
            {
                img: '/img/alexAvatar.jpg',
                name: 'Alexander Smith'
            },
            {
                img: '/img/jessicaAvatar.jpg',
                name: 'Jessica Doe'
            }
        ],
        completion: 60
    },
    {
        icon: <GiPlatform />,
        company: 'Fix Platform Errors',
        budget: 'Not set',
        members: [
            {
                img: '/img/rominaAvatar.jpg',
                name: 'Romina Hadid'
            },
            {
                img: '/img/jessicaAvatar.jpg',
                name: 'Jessica Doe'
            }
        ],
        completion: 100
    },
    {
        icon: <AiOutlineWifi />,
        company: 'Launch our Mobile App',
        budget: '$20,500',
        members: [
            {
                img: '/img/jessicaAvatar.jpg',
                name: 'Jessica Doe'
            },
            {
                img: '/img/rominaAvatar.jpg',
                name: 'Romina Hadid'
            },
            {
                img: '/img/alexAvatar.jpg',
                name: 'Alexander Smith'
            }
        ],
        completion: 100
    },
    {
        icon: <CiShop />,
        company: 'Redesign New Online Shop',
        budget: '$2,000',
        members: [
            {
                img: '/img/rominaAvatar.jpg',
                name: 'Romina Hadid'
            },
            {
                img: '/img/alexAvatar.jpg',
                name: 'Alexander Smith'
            }
        ],
        completion: 30
    },
    {
        icon: <CgShapeRhombus />,
        company: 'Add the New Pricing Page',
        budget: '$500',
        members: [
            {
                img: '/img/jessicaAvatar.jpg',
                name: 'Jessica Doe'
            }
        ],
        completion: 50
    }

]

const types = [
    {
        text: 'Bookings',
        number: '281',
        bgIcon: 'rgba(0, 0, 0, 0.87)',
        icon: <TbBrandBooking />,
        percent: '+55%',
        timeCompare: 'than last week'
    },
    {
        text: `Today's User`,
        number: '2,300',
        bgIcon: 'rgb(26, 115, 232)',
        icon: <RiBarChart2Fill />,
        percent: '+3%',
        timeCompare: 'than last month'
    },
    {
        text: 'Revenue',
        number: '34k',
        bgIcon: 'rgb(76, 175, 80)',
        icon: <CiBank />,
        percent: '+1%',
        timeCompare: 'than yesterday'
    },
    {
        text: 'Followers',
        number: '+91',
        bgIcon: 'rgb(236, 64, 122)',
        icon: <SlUserFollow />,
        percent: '',
        timeCompare: 'Just updated'
    }
]

const charts = [
    {
        type: <ChartBar />,
        bgImg: 'rgb(26, 115, 232)',
        name: 'Website Views',
        performance: 'last campaign performance',
        updated: 'campaign sent 2 days ago',
        percent: null
    },
    {
        type: <ChartLine />,
        bgImg: 'rgb(76, 175, 80)',
        name: 'daily sales',
        performance: 'increase in today sales.',
        updated: 'updated 4 min ago',
        percent: '+15% '
    },
    {
        type: <ChartLine />,
        bgImg: 'rgba(0, 0, 0, 0.87)',
        name: 'completed tasks',
        performance: 'last campaign performance',
        updated: 'just updated',
        percent: null
    }
]


export default function Dashboard() {
    return (
        <div className={styles.wrapDashBoard}>
            <div className='row'>
                {
                    types.map((type, index) => (
                        <div className='col-3 col-md-6 col-sm-12' key={index}>
                            <div className={styles.wrapItem}>
                                <div className={styles.type}>
                                    <span className={styles.typeText}>{type.text}</span>
                                    <h4 className={styles.typeNum}>{type.number}</h4>
                                </div>
                                <div className={`borderBottom ${styles.borderTime}`}></div>
                                <span className={styles.percent}>{type.percent}</span>
                                <span className={styles.timeCompare}>{type.timeCompare}</span>
                                <div className={styles.wrapTypeIcon} style={{ backgroundColor: type.bgIcon }}>{type.icon}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='row'>
                {
                    charts.map((chart, index) => (
                        <div className='col-4 col-md-6 col-sm-12' key={index}>
                            <div className={styles.wrapItem}>
                                <div className={styles.wrapChart} style={{ backgroundColor: chart.bgImg }}>
                                    {chart.type}
                                </div>
                                <h6 className={styles.chartName}>{chart.name}</h6>
                                {chart.percent && <span style={{ color: 'var(--text-dark-color)', fontWeight: 600 }}>{chart.percent}</span>}
                                <span className={styles.chartPerformance}>{chart.performance}</span>
                                <div className='borderBottom'></div>
                                <div className={styles.wrapChartUpdated}>
                                    <AiOutlineClockCircle />
                                    <span className={styles.chartUpdated}>{chart.updated}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className='row'>
                <div className='col-8 col-md-12'>
                    <div className={styles.wrapItem} style={{ height: '100%', marginBottom: 0 }}>
                        <span className={styles.projectTitle}>Projects</span>
                        <span className={styles.projectSubTitle}><AiOutlineCheck className={styles.checkIcon} />(<strong style={{ color: 'var(--text-dark-color)', fontWeight: 600 }}>30 done</strong>) this month</span>
                        <div className={`row ${styles.headerTable}`}>
                            <div className='col-6 p-0'>companies</div>
                            <div className='col-2 p-0'>members</div>
                            <div className='col-2 p-0'>budget</div>
                            <div className='col-2 p-0'>completion</div>
                        </div>


                        {
                            tableDashboard.map((item, id) => (
                                <div className={`row ${styles.tableItem}`} key={id}>
                                    <div className='col-6 p-0'>
                                        <div className={styles.tableItemCompany}>
                                            {item.icon}
                                            <span className={styles.companyName}>{item.company}</span>
                                        </div>
                                    </div>
                                    <div className='col-2 p-0'>
                                        <div className={styles.tableItemMember}>
                                            {
                                                item.members.map((member, index) => (
                                                    <div className={styles.memberAvatar} key={index} style={{ left: `${index * 16}px` }}>
                                                        <img src={member.img} alt='' style={{ width: '100%', height: '100%', borderRadius: '50%' }}></img>
                                                        <div className={styles.memberName}>{member.name}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={`col-2 p-0 ${styles.tableItemBudget}`}>{item.budget}</div>
                                    <div className='col-2 p-0'>
                                        <div className={styles.tableItemCompletion}>
                                            <div className={styles.percentCompletion} style={{ width: `${item.completion}%`, backgroundColor: item.completion === 100 ? 'rgb(76, 175, 80)' : 'rgb(26, 115, 232)' }} ></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
                <div className={`col-4 col-md-12 ${styles.wrapOverView}`}>
                    <div className={styles.wrapItem} style={{ height: '100%', marginBottom: 0 }}>
                        <span className={styles.projectTitle}>Orders overview</span>
                        <span className={styles.projectSubTitle} style={{ marginBottom: '48px' }}><AiOutlineArrowUp className={styles.arrowUpIcon} /><strong style={{ paddingRight: '2px', color: 'var(--text-dark-color)', fontWeight: 600 }}>24% </strong> this month</span>

                        <div className={styles.wrapOverviewItem} >
                            <div className={styles.wrapOverviewIcon} style={{ backgroundColor: 'rgb(76, 175, 80)' }}><AiOutlineBell /></div>
                            <div >
                                <h4 style={{ color: 'var(--text-dark-color' }}>$2400, Design changes</h4>
                                <span style={{ color: 'var(--text-color)' }}>22 DEC 7:20 PM</span>
                            </div>
                        </div>

                        <div className={styles.wrapOverviewItem} >
                            <div className={styles.wrapOverviewIcon} style={{ backgroundColor: 'rgb(244 67 53)' }}><RiBillLine /></div>
                            <div >
                                <h4 style={{ color: 'var(--text-dark-color' }}>New order #1832412</h4>
                                <span style={{ color: 'var(--text-color)' }}>21 DEC 11 PM</span>
                            </div>
                        </div>

                        <div className={styles.wrapOverviewItem} >
                            <div className={styles.wrapOverviewIcon} style={{ backgroundColor: 'rgb(26, 115, 232)' }}><AiOutlineShoppingCart /></div>
                            <div >
                                <h4 style={{ color: 'var(--text-dark-color' }}>Server payments for April</h4>
                                <span style={{ color: 'var(--text-color)' }}>22 DEC 9:34 PM</span>
                            </div>
                        </div>

                        <div className={styles.wrapOverviewItem} >
                            <div className={styles.wrapOverviewIcon} style={{ backgroundColor: 'rgb(251 140 0)' }}><RiBillLine /></div>
                            <div >
                                <h4 style={{ color: 'var(--text-dark-color' }}>New card added for order #4395133</h4>
                                <span style={{ color: 'var(--text-color)' }}>21 DEC 2:20 AM</span>
                            </div>
                        </div>

                        <div className={styles.wrapOverviewItem} >
                            <div className={styles.wrapOverviewIcon} style={{ backgroundColor: 'rgb(233 30 99)' }}><IoMdKey /></div>
                            <div >
                                <h4 style={{ color: 'var(--text-dark-color' }}>New card added for order #4395150</h4>
                                <span style={{ color: 'var(--text-color)' }}>21 DEC 7:20 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
