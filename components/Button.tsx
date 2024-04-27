import React, { Children } from "react";
import styles from "../src/styles/components/button.module.css";
import { ButtonModelType } from "../Types";
import { ButtonType } from "../Types/_enums";

const Button = ({
    type,
    children,
    onClick,
    sx,
    small,
    large,
}: ButtonModelType) => {
    return (
        <button
            style={sx}
            onClick={onClick}
            className={`${styles.button} ${(type === ButtonType.primary && styles.primary)}
                ${(type === ButtonType.secondary && styles.secondary)} ${
                small && styles.small
            } ${large && styles.large}`}>
            {children}
        </button>
    );
};

export default Button;
