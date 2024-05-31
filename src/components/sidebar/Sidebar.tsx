import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { GoListUnordered } from "react-icons/go";
import { GoChecklist } from "react-icons/go";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav className={styles.sidebar}>
        <div className={styles.user}>
            <h1>Welcome Back !</h1>
            <p>Hello Friend</p>
        </div>
        <div className={styles.line}>
            <hr/>
        </div>
        <div className={styles.navigation}>
            <ul>
                <Link 
                    href="/create"
                    className={styles.link}
                >
                    <GoChecklist className={styles.icon}/>
                    <li>Create Task</li>
                </Link>
                <Link 
                    href="/list"
                    className={styles.link}
                >
                    <GoListUnordered className={styles.icon}/>
                    <li>To Do List</li>
                </Link>
            </ul>
        </div>
        <div className={styles.line}>
            <hr />
        </div>
    </nav>
  )
}

export default Sidebar;