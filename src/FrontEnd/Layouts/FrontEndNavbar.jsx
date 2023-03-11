import React from 'react'
import { Link } from 'react-router-dom';
import styles from './FrontEnd.module.css';

const FrontEndNavbar = () => {

    return (
        <div className={styles.main__body}>
            <nav className={styles.nav__body}>
                <ul className={styles.ul__body}>
                    <li><Link className={styles.link__style} to="/">Home</Link></li>
                    <li><Link className={styles.link__style}>Internatioanal</Link></li>
                    <li><Link className={styles.link__style} >Country</Link></li>
                    <li><Link className={styles.link__style} >Sports</Link></li>
                    <li><Link className={styles.link__style} >Culture</Link></li>
                    <li><Link className={styles.link__style}>Politics</Link></li>
                    <li><Link className={styles.link__style} to="/about" >About</Link></li>
                    <li><Link className={styles.link__style} to="/contact"  >Contact</Link></li>
                    <li><Link className={styles.link__style} to="/dashboard" >Dashboard</Link></li>
                    <li><Link className={styles.link__style} to="/login" >Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default FrontEndNavbar