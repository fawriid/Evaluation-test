import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
} from "@mui/material";
import React from "react";
import { QuestionModelType } from "../Types";
import { kMaxLength } from "buffer";

const ShortAnswerQ = ({
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
            <Input
                inputProps={{ maxLength: 10 }}
                sx={{
                    mb: "15px",
                    "@media(prefers-color-scheme:dark)": { color: "#ffffffcc" },
                }}
            />
        </FormControl>
    );
};

export default ShortAnswerQ;
