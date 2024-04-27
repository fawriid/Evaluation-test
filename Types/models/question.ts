import { QuestionType } from "../_enums";

export interface Question {
    question: string;
    answers: string[] | number[] | "";
    correctAnswer: string | number | string[] | number[];
    type: QuestionType;
    sx?: object;
}
