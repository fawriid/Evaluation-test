import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from "@mui/material";
import React from "react";
import { QuestionModelType, UserStatusModel } from "../Types";

interface propTypes {
    data: QuestionModelType;
    userStatus: UserStatusModel;
    setUserStatus: Function;
}

const MultipleAnswerQ = ({ data, userStatus, setUserStatus }: propTypes) => {
    const { question, answers, id } = data;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserStatus((prev: UserStatusModel) => {
            if (
                event.target.checked &&
                !userStatus?.answers?.[id]?.includes(event.target.value)
            ) {
                const updatedAnswers = [...(prev?.answers?.[id] || [])];
                updatedAnswers.push(event.target.value);

                return {
                    ...prev,
                    answers: {
                        ...prev?.answers,
                        [id]: updatedAnswers,
                    },
                };
            } else {
                const updatedAnswers = (prev?.answers?.[id] || []).filter(
                    (val) => val !== event.target.value
                );

                return {
                    ...prev,
                    answers: {
                        ...prev?.answers,
                        [id]: updatedAnswers,
                    },
                };
            }
        });
    };
    return (
        <FormControl>
            <FormLabel
                sx={{ "@media(prefers-color-scheme:dark)": { color: "white" } }}
                id="demo-radio-buttons-group-label">
                {question}
            </FormLabel>
            {typeof answers === "object" &&
                answers.map((answer, index) => (
                    <FormControlLabel
                        id="demo-radio-buttons-group-label"
                        key={index}
                        defaultValue={""}
                        control={
                            <Checkbox
                                checked={userStatus?.answers?.[id]?.includes(
                                    answer
                                )}
                                value={answer}
                                onChange={handleChange}
                            />
                        }
                        label={answer}
                    />
                ))}
        </FormControl>
    );
};

export default MultipleAnswerQ;
