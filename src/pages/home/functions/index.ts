// @ts-nocheck
export const handleNext = (activeStep, setActiveStep, questionLength) => {
    activeStep !== questionLength - 1 && setActiveStep(() => activeStep + 1);
};

export const handleBack = (activeStep, setActiveStep, questionLength) => {
    activeStep !== 0 && setActiveStep(() => activeStep - 1);
};
