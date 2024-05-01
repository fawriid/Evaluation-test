import React, { createRef, useEffect, useRef, useState } from "react";
import styles from "../../../../styles/pages/home.module.css";
import { Stepper } from "..";

import { F } from "../../../../../functions/index";
import QuestionTypePicker from "./QuestionTypePicker";
import { QuestionModelType, UserStatusModel } from "../../../../../Types";
import Button from "../../../../../components/Button";
import { handleBack, handleNext } from "../../functions";
import { ButtonType } from "../../../../../Types/_enums";

const Content = () => {
    const [userStatus, setUserStatus] = useState<UserStatusModel>({});
    const [activeStep, setActiveStep] = useState(0);
    const questions: QuestionModelType[] = F.questions;
    const handleNextTrigger = () =>
        handleNext(activeStep, setActiveStep, questions.length);
    const handleBackTrigger = () =>
        handleBack(activeStep, setActiveStep, questions.length);

    useEffect(() => {
        console.log(userStatus);
    }, [userStatus]);
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
                <Button
                    type={ButtonType.secondary}
                    small
                    onClick={handleBackTrigger}>
                    previous
                </Button>
                <Button
                    type={ButtonType.secondary}
                    small
                    onClick={handleNextTrigger}>
                    next
                </Button>
                {questions.length - 1 == activeStep ? (
                    <Button
                        type={ButtonType.primary}
                        onClick={handleNextTrigger}>
                        Finish Test
                    </Button>
                ) : (
                    <Button
                        type={ButtonType.primary}
                        onClick={handleNextTrigger}>
                        Submit Answer
                    </Button>
                )}
            </div>
        </div>
    );
};

export { Content };
