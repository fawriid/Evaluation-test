import React, { useState } from "react";
import SingleAnswerQ from "../../../../../components/SingleAnswerQ";
import MultipleAnswerQ from "../../../../../components/MultipleAnswerQ";
import { QuestionModelType, UserStatusModel } from "../../../../../Types";
import LongAnswerQ from "../../../../../components/LongAnswerQ";
import ShortAnswerQ from "../../../../../components/ShortAnswerQ";
import { QuestionType } from "../../../../../Types/_enums";

interface propTypes {
    question: QuestionModelType;
    setUserStatus: Function;
    userStatus: UserStatusModel;
}

const QuestionTypePicker = (prop: propTypes) => {
    const { question, userStatus, setUserStatus } = prop;
    return question.type === QuestionType.single ? (
        <SingleAnswerQ
            userStatus={userStatus}
            setUserStatus={setUserStatus}
            data={question}
        />
    ) : question.type === QuestionType.multiple ? (
        <MultipleAnswerQ
            userStatus={userStatus}
            setUserStatus={setUserStatus}
            data={question}
        />
    ) : question.type === QuestionType.short ? (
        <LongAnswerQ
            userStatus={userStatus}
            setUserStatus={setUserStatus}
            data={question}
        />
    ) : (
        question.type === QuestionType.long && (
            <ShortAnswerQ
                userStatus={userStatus}
                setUserStatus={setUserStatus}
                data={question}
            />
        )
    );
};

export default QuestionTypePicker;
