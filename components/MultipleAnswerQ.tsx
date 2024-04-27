import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from "@mui/material";
import React from "react";
import { QuestionModelType } from "../Types";

const MultipleAnswerQ = ({
    question,
    answers,
    type,
    correctAnswer,
}: QuestionModelType) => {
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
                        control={<Checkbox />}
                        label={answer}
                    />
                ))}
        </FormControl>
    );
};

export default MultipleAnswerQ;
