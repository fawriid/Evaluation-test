import { Button, MobileStepper } from "@mui/material";
import React, { useState } from "react";
import { F } from "../../../../../functions";

interface propTypes {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const Stepper = ({ activeStep, setActiveStep }: propTypes) => {
    const questions = F.questions;
    return (
        <MobileStepper
            variant="dots"
            steps={questions.length}
            position="static"
            activeStep={activeStep}
            sx={{
                background: "none",
                alignItems: "flex-start",
                paddingLeft: 0,
                maxWidth: 400,
                flexGrow: 1,
                maxHeight: 30,
                ".MuiMobileStepper-dot": {
                    width: "50px",
                    height: "6px",
                    borderRadius: "2px",
                },
            }}
            nextButton={<></>}
            backButton={<></>}
        />
    );
};

export { Stepper };
