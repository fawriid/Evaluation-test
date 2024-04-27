import React from "react";
import styles from '../../src/styles/components/navbar.module.css'
import NextLink from "../Link";

const Navbar = () => {
    const random = Math.random();
    return (
        <div className={`${styles.navbar}`}>
            <NextLink url={`/create-question`}>Create question</NextLink>
            <NextLink url={`/${random.toFixed(5)}`}>404</NextLink>
        </div>
    );
};

export default Navbar;
