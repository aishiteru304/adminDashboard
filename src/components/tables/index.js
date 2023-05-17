import React from 'react'
import styles from './Tables.module.scss'
import { SiAsana } from 'react-icons/si'
import { BsThreeDotsVertical, BsSpotify } from 'react-icons/bs'
import { AiFillGithub, AiOutlineSlack } from 'react-icons/ai'


const authors = [
    {
        avatar: 'img/alexAvatar.jpg',
        name: 'alexander smith',
        mail: 'alexander@gmail.com',
        postion: 'manager',
        place: 'organization',
        status: 'online',
        employed: '23/04/18'
    },
    {
        avatar: 'img/jessicaAvatar.jpg',
        name: 'jessica doe',
        mail: 'jessica@gmail.com',
        postion: 'programator',
        place: 'developer',
        status: 'offline',
        employed: '11/01/19'
    },
    {
        avatar: 'img/rominaAvatar.jpg',
        name: 'romina hadid',
        mail: 'romina@gmail.com',
        postion: 'manager',
        place: 'organization',
        status: 'online',
        employed: '19/09/17'
    },
    {
        avatar: 'img/ryanAvatar.jpg',
        name: 'ryan tomspon',
        mail: 'ryan@gmail.com',
        postion: 'programator',
        place: 'developer',
        status: 'online',
        employed: '24/12/08'
    }
]

const projects = [
    {
        icon: <SiAsana />,
        name: 'asana',
        budget: '$2,500',
        status: 'working',
        percentCompletion: 60
    },
    {
        icon: <AiFillGithub />,
        name: 'github',
        budget: '$5000',
        status: 'done',
        percentCompletion: 100
    },
    {
        icon: <BsSpotify />,
        name: 'spotify',
        budget: '$14,000',
        status: 'cancel',
        percentCompletion: 30
    },
    {
        icon: <AiOutlineSlack />,
        name: 'slack',
        budget: '$1,000',
        status: 'working',
        percentCompletion: 50
    }
]



export default function Tables() {

    return (
        <div className={styles.wrapTables}>

            <div className={styles.authorTable}>
                <div className={styles.wrapContentAuthor}>
                    <div className={styles.contentAuthor}>
                        <div className={styles.headerAuthor}>
                            <div className='col-6 p-0'>author</div>
                            <div className='col-1-5'>function</div>
                            <div className='col-1-5'>status</div>
                            <div className='col-1-5'>employed</div>
                            <div className='col-1-5'>action</div>
                        </div>

                        {
                            authors.map((author, index) => (
                                <div className={`row ${styles.authorItem}`} key={index}>
                                    <div className={`col-6 p-0 ${styles.wrapAuthorInfor}`}>
                                        <div><img src={author.avatar} alt='' className={styles.authorAvatar}></img></div>
                                        <div className={styles.authorInfor}>
                                            <h4>{author.name}</h4>
                                            <h5>{author.mail}</h5>
                                        </div>
                                    </div>
                                    <div className={`col-1-5 ${styles.authorInfor} p-0`}>
                                        <h4>{author.postion}</h4>
                                        <h5>{author.place}</h5>
                                    </div>
                                    <div className='col-1-5'><h2 className={`${styles.authorStatus} ${author.status === 'online' ? styles.online : styles.offline}`}>{author.status}</h2></div>
                                    <div className={`col-1-5 ${styles.authorEmployed}`}>{author.employed}</div>
                                    <div className={`col-1-5 ${styles.authorEmployed}`}>edit</div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className={styles.authorTableTitle}>authors table</div>
            </div>

            <div className={styles.authorTable} style={{ marginTop: '64px' }}>
                <div className={styles.wrapContentAuthor}>
                    <div className={styles.contentAuthor}>
                        <div className={styles.headerAuthor}>
                            <div className='col-4 p-0'>project</div>
                            <div className='col-2 p-0'>budget</div>
                            <div className='col-2 p-0'>status</div>
                            <div className='col-2 p-0'>completion</div>
                            <div className='col-2 p-0'>action</div>
                        </div>

                        {
                            projects.map((project, index) => (
                                <div className={`row ${styles.authorItem}`} key={index}>
                                    <div className={`col-4 p-0 ${styles.wrapProjectSection}`}>
                                        {project.icon}
                                        <h4 className={styles.projectName}>{project.name}</h4>
                                    </div>
                                    <div className={`col-2 p-0 ${styles.projectBudget}`}>{project.budget}</div>
                                    <div className={`col-2 p-0 ${styles.projectBudget}`}>{project.status}</div>
                                    <div className={`col-2 p-0`} style={{ display: 'flex' }}>
                                        <h5 className={styles.projectBudget}>{project.percentCompletion}%</h5>
                                        <div className={styles.projectCompletion}>
                                            <div className={styles.percentCompletion} style={{ width: `${project.percentCompletion}%`, backgroundColor: project.percentCompletion === 100 ? 'rgb(79 169 83)' : project.percentCompletion > 39 ? 'rgb(50 140 237)' : 'rgb(233 68 65)' }}></div>
                                        </div>
                                    </div>
                                    <div className={`col-2 p-0 ${styles.projectBudget}`} ><BsThreeDotsVertical style={{ marginLeft: '24px' }} /></div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className={styles.authorTableTitle}>projects table</div>
            </div>


        </div>
    )
}
