import { UserStatusModel } from "../Types";

export const setAnswerToQuestion = (
    toDo: Function,
    answer: any,
    id: number
) => {
    toDo((prev: UserStatusModel) => {
        return {
            ...prev,
            answers: {
                ...prev.answers,
                [id]: answer,
            },
        };
    });
};
