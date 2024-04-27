import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    TextareaAutosize,
} from "@mui/material";
// import Textarea from "@mui/joy/Textarea";
import React, { useState } from "react";
import { QuestionModelType } from "../Types";

const LongAnswerQ = ({
    question,
    answers,
    type,
    correctAnswer,
    sx,
}: QuestionModelType) => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <FormControl>
            <FormLabel
                sx={{
                    color: isToggled ? "#1876D1" : "black",
                    "@media(prefers-color-scheme:dark)": {
                        color: isToggled ? "#1876D1" : "white",
                    },
                }}
                id="demo-radio-buttons-group-label">
                {question}
            </FormLabel>
            <TextareaAutosize
                onFocus={() => setIsToggled(true)}
                onBlur={() => setIsToggled(false)}
                minRows={4}
                style={{
                    minWidth: 300,
                    marginBottom: "15px",
                    marginTop: "10px",
                    borderColor: "#00000020",
                    borderRadius: "10px",
                    padding: "10px",
                }}
            />
        </FormControl>
    );
};

export default LongAnswerQ;