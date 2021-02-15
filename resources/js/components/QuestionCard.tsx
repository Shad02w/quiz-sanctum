import { Option } from '@models/Data'
import React from 'react'

interface QuestionCardProps {
    question: string,
    options: Option[],
    answer: string

}

const QuestionCard = (props: QuestionCardProps) => {
    const { question: questions, options, answer } = props
    const createOptions = (options: Option[]) =>
        options.map((option, index) => {
            return <div key={index} className='md-2'>{option.label}: {option.text}</div>
        })

    return (
        <div className='w-full p-4 min-h-44 rounded-lg shadow-lg bg-gray-800' >
            <p className='font-bold mb-3'>{questions}</p>
            {createOptions(options)}
        </div>
    )
}

export default QuestionCard
