import React, { Children } from "react";
import styles from "../src/styles/components/button.module.css";
import { ButtonModelType } from "../Types";
import { ButtonType } from "../Types/_enums";
import { Button } from "@mui/material";

const ButtonComponent = ({
    type,
    children,
    onClick,
    sx,
    small,
    large,
}: ButtonModelType) => {
    return (
        // <Button
        //     style={sx}
        //     onClick={onClick}
        //     type=""
        //     className={`${styles.button} ${
        //         type === ButtonType.primary && styles.primary
        //     }
        //         ${type === ButtonType.secondary && styles.secondary} ${
        //         small && styles.small
        //     } ${large && styles.large}`}>
        //     {children}
        // </Button>
        <button
            style={sx}
            onClick={onClick}
            className={`${styles.button} ${
                type ? type === ButtonType.primary && styles.primary : ""
            }
                ${
                    type
                        ? type === ButtonType.secondary && styles.secondary
                        : ""
                } ${small && styles.small} ${large && styles.large}`}>
            {children}
        </button>
    );
};

export default ButtonComponent;
