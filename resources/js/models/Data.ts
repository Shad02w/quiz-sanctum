export interface Option {
    label: string
    content: string
}

export interface Question {
    question: string,
    options: Option[],
    answer_id: number
}
