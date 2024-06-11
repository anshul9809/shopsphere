import React from "react";
import styles from "./footerlinks.module.scss";

import logo from "../../../assets/img/logo.png"

const FooterLinks = ()=>{
    return (
        <>
            <section className={styles.footer_section}>
                <div className={styles.footer}>
                    <div className={styles.footer_logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.footer_menu}>
                        <p className={styles.link_heading}>Features</p>
                        <ul className={`${styles.nav_ul} ${styles.footer_links}`}>
                            <li>
                                <a href="#" >Link Shortning</a>
                            </li>
                            <li>
                                <a href="#" >Branded Links</a>
                            </li>
                            <li>
                                <a href="#" >Analytics</a>
                            </li>
                            <li>
                                <a href="#" >Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_menu}>
                        <p className={styles.link_heading}>Features</p>
                        <ul className={`${styles.nav_ul} ${styles.footer_links}`}>
                            <li>
                                <a href="#" >Link Shortning</a>
                            </li>
                            <li>
                                <a href="#" >Branded Links</a>
                            </li>
                            <li>
                                <a href="#" >Analytics</a>
                            </li>
                            <li>
                                <a href="#" >Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_menu}>
                        <p className={styles.link_heading}>Features</p>
                        <ul className={`${styles.nav_ul} ${styles.footer_links}`}>
                            <li>
                                <a href="#" >Link Shortning</a>
                            </li>
                            <li>
                                <a href="#" >Branded Links</a>
                            </li>
                            <li>
                                <a href="#" >Analytics</a>
                            </li>
                            <li>
                                <a href="#" >Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterLinks;