import React from "react";
import SingleAnswerQ from "../../../../../components/SingleAnswerQ";
import MultipleAnswerQ from "../../../../../components/MultipleAnswerQ";
import { QuestionModelType } from "../../../../../Types";
import LongAnswerQ from "../../../../../components/LongAnswerQ";
import ShortAnswerQ from "../../../../../components/ShortAnswerQ";
import { QuestionType } from "../../../../../Types/_enums";

interface propTypes {
    question: QuestionModelType;
}

const QuestionTypePicker = (prop: propTypes) => {
    const { question } = prop;
    return question.type === QuestionType.single ? (
        <SingleAnswerQ {...question} />
    ) : question.type === QuestionType.multiple ? (
        <MultipleAnswerQ {...question} />
    ) : question.type === QuestionType.short ? (
        <LongAnswerQ {...question} />
    ) : (
        question.type === QuestionType.long && <ShortAnswerQ {...question} />
    );
};

export default QuestionTypePicker;
