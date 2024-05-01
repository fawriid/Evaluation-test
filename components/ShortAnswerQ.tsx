import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import { QuestionModelType, UserStatusModel } from "../Types";
import { kMaxLength } from "buffer";
import { F } from "../functions";

interface propTypes {
    data: QuestionModelType;
    setUserStatus: Function;
    userStatus: UserStatusModel;
}

const ShortAnswerQ = ({ data, userStatus, setUserStatus }: propTypes) => {
    const { question, id } = data;
    return (
        <FormControl>
            <FormLabel
                sx={{ "@media(prefers-color-scheme:dark)": { color: "white" } }}
                id="demo-radio-buttons-group-label">
                {question}
            </FormLabel>
            <Input
                inputProps={{ maxLength: 10 }}
                onChange={(e) =>
                    F.setAnswerToQuestion(setUserStatus, e.target.value, id)
                }
                value={userStatus?.answers?.[id]}
                sx={{
                    mb: "15px",
                    "@media(prefers-color-scheme:dark)": { color: "#ffffffcc" },
                }}
            />
        </FormControl>
    );
};

export default ShortAnswerQ;
