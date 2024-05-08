import React, { Children, useEffect } from "react";
import Link from "next/link";
import styles from "../src/styles/components/link.module.css";
import { LinkModelType } from "../Types";
import { LinkType } from "../Types/_enums";

const NextLink = ({ url, replace = false, children, type }: LinkModelType) => {
    return (
        <Link
            href={url}
            replace={replace}
            className={`${styles.link} 
            ${type ? type === LinkType.primary && styles.primary : ""} 
            ${type ? type === LinkType.secondary && styles.secondary : ""} 
                `}>
            {children}
        </Link>
    );
};

export default NextLink;
