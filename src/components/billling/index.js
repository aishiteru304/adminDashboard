import React from 'react'
import styles from './Billing.module.scss'
import { AiOutlineWifi, AiOutlineBank, AiOutlineSchedule, AiFillDelete } from 'react-icons/ai'
import { GrPaypal } from 'react-icons/gr'
import { Button } from '@mui/material';
import { HiPencil } from 'react-icons/hi'
import { SiVisa } from 'react-icons/si'
import { MdOutlinePictureAsPdf } from 'react-icons/md'
import { BsChevronDown, BsChevronUp, BsExclamationLg } from 'react-icons/bs'

const invoices = [
    {
        time: 'march, 01, 2020',
        id: '#MS-415646',
        prices: '$180'
    },
    {
        time: 'february, 10, 2021',
        id: '#Rv-126749',
        prices: '$250'
    },
    {
        time: 'april, 05, 2020',
        id: '#QW-103578',
        prices: '$120'
    },
    {
        time: 'june, 25, 2019',
        id: '#MS-415646',
        prices: '$180'
    },
    {
        time: 'march, 01, 2019',
        id: '#AR-803481',
        prices: '$300'
    }
]

const billingInfors = [
    {
        name: 'oliver liam',
        companyName: 'viking burrito',
        email: 'oliver@burrito.com',
        VAT: 'FRB1235476'
    },
    {
        name: 'Lucas Harper',
        companyName: 'Stone Tech Zone',
        email: 'lucas@stone-tech.com',
        VAT: 'FRB1235476'
    },
    {
        name: 'Ethan James',
        companyName: 'Fiber Notion',
        email: 'ethan@fiber.com',
        VAT: 'FRB1235476'
    }
]

const newestTransactions = [
    {
        name: 'netflix',
        time: '27 March 2020, at 12:30 PM',
        state: '-',
        money: '$ 2,500'
    },
    {
        name: 'Apple',
        time: '27 March 2020, at 4:40 PM',
        state: '+',
        money: '$ 2,000'
    }
]

const yesterdayTransactions = [
    {
        name: 'Stripe',
        time: '26 March 2020, at 13:45 PM',
        state: '+',
        money: '$ 750'
    },
    {
        name: 'HubSpot',
        time: '26 March 2020, at 12:30 PM',
        state: '+',
        money: '$ 1,000'
    },
    {
        name: 'Creative Tim',
        time: '26 March 2020, at 08:30 AM',
        state: '+',
        money: '$ 2,500'
    },
    {
        name: 'Webflow',
        time: '26 March 2020, at 05:00 AM',
        state: '',
        money: 'Pendding'
    }
]

export default function Billing() {

    const handleDelete = (index) => {
        const billId = document.getElementById(`bill${index}`)
        if (billId)
            billId.remove()
    }
    return (
        <div className={styles.wrapBilling}>
            <div className='row'>
                <div className='col-8 col-md-12'>
                    <div className='subRow' >
                        <div className='col-6 col-lg-12'>
                            <div className={styles.wrapItem}>
                                <div className={styles.cardHolder}>
                                    <i className={styles.wifiIcon}><AiOutlineWifi /></i>
                                    <h4 className={styles.cardNumber}>4562   1122   4594   7852</h4>
                                    <div className={styles.infor}>
                                        <h5>card holder</h5>
                                        <h4>jack peterson</h4>
                                    </div>
                                    <div className={styles.infor}>
                                        <h5>expires</h5>
                                        <h4>11/22</h4>
                                    </div>
                                    <img className={styles.masterCardImg} src='img/mastercard.png' alt=''></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-3 col-lg-6 col-sm-12'>
                            <div className={styles.wrapItem} style={{ height: '220px' }}>
                                <i className={styles.wrapSalaryIcon}><AiOutlineBank /></i>
                                <h2 className={styles.salaryTitle}>salary</h2>
                                <h2 className={styles.salarySubTitle}>belong interactive</h2>
                                <div className='borderBottom'></div>
                                <h2 className={styles.salaryNumber}>+$2000</h2>
                            </div>
                        </div>
                        <div className='col-3 col-lg-6 col-sm-12'>
                            <div className={styles.wrapItem} style={{ height: '220px' }}>
                                <i className={styles.wrapSalaryIcon}><GrPaypal /></i>
                                <h2 className={styles.salaryTitle}>payal</h2>
                                <h2 className={styles.salarySubTitle}>freelance payment</h2>
                                <div className='borderBottom'></div>
                                <h2 className={styles.salaryNumber}>$455.00</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className={`col-12 p-0`}>
                            <div className={styles.wrapItem}>
                                <div className={styles.wrapPaymentMethod}>
                                    <h4>payment method</h4>
                                    <Button className={styles.newCardBtn}>+ add new card</Button>
                                </div>

                                <div className='row'>
                                    <div className='col-6 col-sm-12'>
                                        <div className={styles.typePayment}>
                                            <img src='img/mastercard.png' alt='' style={{ height: '26px' }}></img>
                                            <h2>**** **** **** 7852</h2>
                                            <i><HiPencil /></i>
                                        </div>
                                    </div>
                                    <div className='col-6 col-sm-12'>
                                        <div className={styles.typePayment}>
                                            <SiVisa className={styles.visaIcon} />
                                            <h2>**** **** **** 5248</h2>
                                            <i><HiPencil /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-4 col-md-12'>
                    <div className={`${styles.wrapItem} ${styles.wrapInvoices}`}>
                        <div className={styles.invoicesHeader}>
                            <h4>invoices</h4>
                            <Button className={styles.viewAllBtn}>view all</Button>
                        </div>

                        {
                            invoices.map((invoice, index) => (
                                <div className={styles.invoicesItem} key={index}>
                                    <div>
                                        <h4 className={styles.invoicesTime}>{invoice.time}</h4>
                                        <h5 className={styles.invoicesId}>{invoice.id}</h5>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <h4 className={styles.invoicesPrices}>{invoice.prices}</h4>
                                        <div className={styles.invoicesPdf}>
                                            <MdOutlinePictureAsPdf />
                                            <h5>pdf</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-7 col-md-12'>
                    <div className={`${styles.wrapItem} ${styles.wrapBillingInfor}`} >
                        <h3 className={styles.billInforHeader}>billing information</h3>

                        {
                            billingInfors.map((bill, index) => (
                                <div className={styles.billingInforItem} key={index} id={`bill${index}`}>
                                    <h4 className={styles.billingInforItemHeader}>{bill.name}
                                        <div className={styles.billingInforItemEdit}><HiPencil /><span>Edit</span> </div>
                                        <div className={styles.billingInforItemDelete} onClick={() => handleDelete(index)}><AiFillDelete /><span>Delete</span> </div>
                                    </h4>

                                    <h5 className={styles.billingInforItemText}>company name: <strong>{bill.companyName}</strong></h5>
                                    <h5 className={styles.billingInforItemText}>email address: <strong style={{ textTransform: 'lowercase' }}>{bill.email}</strong></h5>
                                    <h5 className={styles.billingInforItemText}>VAT number: <strong style={{ textTransform: 'uppercase' }}>{bill.VAT}</strong></h5>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className='col-5 col-md-12'>
                    <div className={`${styles.wrapItem} ${styles.wrapTansaction}`}>
                        <h3 className={styles.billInforHeader}>your's transaction
                            <div className={styles.wrapSchedule}><AiOutlineSchedule /><span>11-18 May 2023</span></div>
                        </h3>
                        <h4 className={styles.transanctionTitle}>newest</h4>

                        {
                            newestTransactions.map((tran, index) => (
                                <div className={styles.transactionItem} key={index}>
                                    <div>
                                        <h4 className={styles.transactionItemName}>{tran.name}</h4>
                                        <h5 className={styles.transactionItemTime}>{tran.time}</h5>
                                    </div>
                                    <span style={{ color: tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)' }}>{`${tran.state} ${tran.money}`}</span>
                                    <div className={styles.transactionItemIcon} style={{
                                        color: tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)',
                                        border: `solid 1px ${tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)'}`
                                    }}>
                                        {tran.state === '-' ? <BsChevronDown /> : tran.state === '+' ? <BsChevronUp /> : <BsExclamationLg />}
                                    </div>
                                </div>
                            ))
                        }

                        <h4 className={styles.transanctionTitle}>yesterday</h4>

                        {
                            yesterdayTransactions.map((tran, index) => (
                                <div className={styles.transactionItem} key={index}>
                                    <div>
                                        <h4 className={styles.transactionItemName}>{tran.name}</h4>
                                        <h5 className={styles.transactionItemTime}>{tran.time}</h5>
                                    </div>
                                    <span style={{ color: tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)' }}>{`${tran.state} ${tran.money}`}</span>
                                    <div className={styles.transactionItemIcon} style={{
                                        color: tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)',
                                        border: `solid 1px ${tran.state === '-' ? 'red' : tran.state === '+' ? 'green' : 'var(--text-dark-color)'}`
                                    }}>
                                        {tran.state === '-' ? <BsChevronDown /> : tran.state === '+' ? <BsChevronUp /> : <BsExclamationLg />}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
