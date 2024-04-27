import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React from "react";
import { QuestionModelType } from "../Types";

const SingleAnswerQ = ({
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
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
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
