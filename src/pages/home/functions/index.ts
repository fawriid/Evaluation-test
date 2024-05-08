import { UserStatusModel } from "../../../../Types";

export const handleNext = (
    activeStep: number,
    setActiveStep: Function,
    questionLength: number
) => {
    activeStep !== questionLength - 1 && setActiveStep(() => activeStep + 1);
};

export const handleBack = (
    activeStep: number,
    setActiveStep: Function,
    questionLength: number
) => {
    activeStep !== 0 && setActiveStep(() => activeStep - 1);
};


export const setToLocalStorage = (userStatus:UserStatusModel) => {
    localStorage.setItem('userStatus', JSON.stringify(userStatus));
}

export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userStatus') || '{}') as UserStatusModel;
}   
