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
            return <div key={index} className='md-2 ring-2 ring-gray-400 dark:ring-gray-700 text-gray-800 dark:text-gray-100 px-4 py-3 rounded-lg flex justify-center items-center'>{option.label}: {option.text}</div>
        })

    return (
        <div className='w-full p-4 min-h-44 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800' >
            <p className='font-bold mb-5'>{questions}</p>
            <div className='grid grid-cols-1 gap-4'>
                {createOptions(options)}
            </div>
        </div>
    )
}

export default QuestionCard
