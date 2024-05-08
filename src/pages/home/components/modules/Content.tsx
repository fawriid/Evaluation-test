import React, { createRef, useEffect, useRef, useState } from "react";
import styles from "../../../../styles/pages/home.module.css";
import { Stepper } from "..";

import { F } from "../../../../../functions/index";
import QuestionTypePicker from "./QuestionTypePicker";
import { QuestionModelType, UserStatusModel } from "../../../../../Types";
import {
    getFromLocalStorage,
    handleBack,
    handleNext,
    setToLocalStorage,
} from "../../functions";
import { ButtonType } from "../../../../../Types/_enums";
import ButtonComponent from "../../../../../components/ButtonComponent";

const Content = () => {
    const [userStatus, setUserStatus] = useState<UserStatusModel>({});
    const [activeStep, setActiveStep] = useState(0);
    const questions: QuestionModelType[] = F.questions;
    const handleNextTrigger = () => {
        handleNext(activeStep, setActiveStep, questions?.length);
        setToLocalStorage(userStatus);
    };
    const handleBackTrigger = () => {
        handleBack(activeStep, setActiveStep, questions?.length);
        setToLocalStorage(userStatus);
    };

    useEffect(() => {
        setUserStatus(getFromLocalStorage());
    }, []);

    return (
        <div className={`${styles.content}`}>
            <div className={styles.content_header}>
                <h1>Test</h1>
                <span>16:25</span>
            </div>
            <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />

            <div className={styles.question}>
                <QuestionTypePicker
                    userStatus={userStatus}
                    setUserStatus={setUserStatus}
                    question={questions[activeStep]}
                />
            </div>
            <div className={styles.buttonContainer}>
                <ButtonComponent
                    type={ButtonType.secondary}
                    small
                    onClick={handleBackTrigger}>
                    previous
                </ButtonComponent>
                <ButtonComponent
                    type={ButtonType.secondary}
                    small
                    onClick={handleNextTrigger}>
                    next
                </ButtonComponent>
                {questions?.length - 1 == activeStep ? (
                    <ButtonComponent
                        type={ButtonType.primary}
                        onClick={handleNextTrigger}>
                        Finish Test
                    </ButtonComponent>
                ) : (
                    <ButtonComponent
                        type={ButtonType.primary}
                        onClick={handleNextTrigger}>
                        Submit Answer
                    </ButtonComponent>
                )}
            </div>
        </div>
    );
};

export { Content };
