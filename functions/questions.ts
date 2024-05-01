import { QuestionModelType } from "../Types";
import { QuestionType } from "../Types/_enums";

const questions: QuestionModelType[] = [
    {
        question: "how many correct answer",
        answers: ['1', '2', '3', '4'],
        correctAnswer: '2',
        type: QuestionType.multiple,
        id: 5,
    },
    {
        question: "please describe yourself a little.",
        answers: "",
        correctAnswer: "",
        type: QuestionType.long,
        id: 1,
    },
    {
        question: "what is your opinion about us ?",
        answers: "",
        correctAnswer: "",
        type: QuestionType.short,
        id: 2,
    },
    {
        question: "2 + 2 = ? ",
        answers: ['4', '3', '5', '7'],
        correctAnswer: '4',
        type: QuestionType.single,
        id: 3,
    },
    {
        question: "where is the capital of russia",
        answers: ["Moscow", "SPB", "Kazan"],
        correctAnswer: "Moscow",
        type: QuestionType.single,
        id: 4,
    },

    {
        question: "who are u ?",
        answers: ["me", "I", "ya"],
        correctAnswer: ["me", "ya"],
        type: QuestionType.multiple,
        id: 6,
    },
    {
        question: "where are u ?",
        answers: ["kazan", "spb", "moscow"],
        correctAnswer: "spb",
        type: QuestionType.single,
        id: 7,
    },
];

export default questions;
