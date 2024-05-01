import { QuestionType } from "../_enums";

export interface Question {
    question: string;
    answers: string | string[] ;
    correctAnswer: string | string[] ;
    type: QuestionType;
    id: number;
}
