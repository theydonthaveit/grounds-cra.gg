import React from 'react';
import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <>
            <nav className={styles.menu}>
                <input type="checkbox" href="#" className={styles.menuOpen} name="menu-open" id="menu-open" />
                <label className={styles.menuOpenButton} for="menu-open">
                    <span className={`${styles.hamburger} ${styles.hamburgerOne}`}></span>
                    <span className={`${styles.hamburger} ${styles.hamburgerTwo}`}></span>
                    <span className={`${styles.hamburger} ${styles.hamburgerThree}`}></span >
                </label >

                <a href="#" className={styles.menuItem}> <i class="fa fa - bar - chart"></i> </a>
                <a href="#" className={styles.menuItem} > <i class="fa fa- plus"></i> </a >
                <a href="#" className={styles.menuItem}> <i class="fa fa- heart"></i> </a>
                <a href="#" className={styles.menuItem}> <i class="fa fa- envelope"></i> </a>
            </nav >
        </>
    );
}

export default Navbar;