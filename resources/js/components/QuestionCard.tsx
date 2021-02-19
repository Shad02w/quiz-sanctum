import { ApiResquest, backendApiAxios, OptionGetResponse, Option_Api } from '@models/Api'
import React, { useEffect, useState } from 'react'

interface QuestionCardProps {
    question: string,
    questionId: number
}

const QuestionCard = (props: QuestionCardProps) => {
    const { question: questions, questionId } = props
    const [options, setOptions] = useState<Option_Api[]>([])

    useEffect(() => {
        ApiResquest<OptionGetResponse>('GET', `/questions/${questionId}/options`)
            .then(res => {
                if (!res) return
                if (res.type === 'success') setOptions(res.data.items)
                else console.error('options failed', res.data)
            })
    }, [questionId])

    const createOptions = (options: Option_Api[]) => {
        return (
            options.length > 0
                ?
                <div className='grid mt-5 grid-cols-1 gap-4'>
                    {
                        options.map((option, index) => {
                            return <div key={index} className='md-2 ring-2 ring-gray-400 dark:ring-gray-700 text-gray-800 dark:text-gray-100 px-4 py-3 rounded-lg flex justify-center items-center'>{option.label}: {option.content}</div>
                        })
                    }
                </div>
                :
                <></>
        )
    }



    return (
        <div className='w-full p-4 min-h-44 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800' >
            <p className='font-bold'>{questions}</p>
            {createOptions(options)}
        </div>
    )
}

export default QuestionCard
