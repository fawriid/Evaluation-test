import { QuestionModelType } from "../Types";
import { QuestionType } from "../Types/_enums";

const questions: QuestionModelType[] = [
    {
        question: "please describe yourself a little.",
        answers: "",
        correctAnswer: "",
        type: QuestionType.long,
    },
    {
        question: "what is your opinion about us ?",
        answers: "",
        correctAnswer: "",
        type: QuestionType.short,
    },
    {
        question: "2 + 2 = ? ",
        answers: [4, 3, 5, 7],
        correctAnswer: 4,
        type: QuestionType.single,
    },
    {
        question: "where is the capital of russia",
        answers: ["Moscow", "SPB", "Kazan"],
        correctAnswer: "Moscow",
        type: QuestionType.single,
    },
    {
        question: "how many correct answer",
        answers: [1, 2, 3, 4],
        correctAnswer: 2,
        type: QuestionType.multiple,
    },
    {
        question: "who are u ?",
        answers: ["me", "I", "ya"],
        correctAnswer: ["me", "ya"],
        type: QuestionType.multiple,
    },
    {
        question: "where are u ?",
        answers: ["kazan", "spb", "moscow"],
        correctAnswer: "spb",
        type: QuestionType.single,
    },
];

export default questions;
