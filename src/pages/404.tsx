import React from "react";
import styles from "../styles/pages/404.module.css";
import Image from "next/image";
import Page from "../../components/layout/Page";
import Link from "next/link";
import NextLink from "../../components/Link";
import Button from "../../components/ButtonComponent";
import { useRouter } from "next/router";
import { ButtonType } from "../../Types/_enums";

const NotFound = () => {
    const router = useRouter();
    const goToMain = () => {
        router.replace("/");
    };
    return (
        <Page fullscreen title="404">
            <div className={`${styles.div}`}>
                <h1>404</h1>
                <p>
                    There is nothing to see here :<span>)</span>
                </p>
                <div className={styles.back_btn}>
                    <Button onClick={() => goToMain()} type={ButtonType.primary}>
                        Back to main
                    </Button>
                </div>
            </div>
        </Page>
    );
};

export default NotFound;
