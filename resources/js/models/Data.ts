export interface Option {
    label: string
    content: string
    question_id: number
}

export interface Question {
    question: string,
}

export interface Answer {
    question_id: number,
    option_id: number
}
