import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import { QuestionModelType, UserStatusModel } from "../Types";
import { F } from "../functions";

interface propTypes {
    data: QuestionModelType;
    setUserStatus: Function;
    userStatus: UserStatusModel;
}

const SingleAnswerQ = ({ data, userStatus, setUserStatus }: propTypes) => {
    const { question, answers, id } = data;
    return (
        <FormControl>
            <FormLabel
                sx={{ "@media(prefers-color-scheme:dark)": { color: "white" } }}
                id="demo-radio-buttons-group-label">
                {question}
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={""}
                value={userStatus?.answers?.[id]}
                onChange={(e) =>
                    F.setAnswerToQuestion(setUserStatus, e.target.value, id)
                }
                name="radio-buttons-group">
                {typeof answers == "object" &&
                    answers.map((answer, index) => (
                        <FormControlLabel
                            key={index}
                            value={answer}
                            control={<Radio />}
                            label={answer}
                        />
                    ))}
            </RadioGroup>
        </FormControl>
    );
};

export default SingleAnswerQ;
