import { AnswerGetResponse, Answer_Api, ApiResquest, OptionGetResponse, Option_Api } from '@models/Api'
import { Answer, Option } from '@models/Data'
import React, { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

interface QuestionCardProps {
    question: string,
    questionId: number
}

const QuestionCard = (props: QuestionCardProps) => {
    const { question: questions, questionId } = props
    const [options, setOptions] = useState<Option_Api[]>([])
    const [answers, setAnswers] = useState<Answer_Api[]>([])

    useEffect(() => {
        ApiResquest<OptionGetResponse>('GET', `/questions/${questionId}/options`)
            .then(res => {
                if (!res) return
                if (res.type === 'success') setOptions(res.data.items)
                else console.error('options failed', res.data)
            })
        ApiResquest<AnswerGetResponse>('GET', `/questions/${questionId}/answers`)
            .then(res => {
                if (!res) return
                if (res.type === 'success') setAnswers(res.data.items)
                else console.error('answer failed', res.data)
            })
    }, [questionId])

    const createOptions = (options: Option_Api[]) => {
        return (
            options.length > 0
                ?
                <div className='grid grid-cols-1 gap-2'>
                    {
                        options.map((option, index) => {
                            return (
                                <div key={index} className='text-gray-800 dark:text-gray-100 rounded-md flex flex-row items-center'>
                                    <div className='px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-900 mr-1'>{option.label}</div>
                                    <div className='p-2'>{option.content}</div>
                                    {
                                        (answers.some(a => a.option_id === option.id)) ?
                                            <div className='rounded-full flex justify-center items-center bg-rose-700 text-white p-1 ml-auto'>
                                                <AiOutlineCheck className='fill-current w-4 h-4' />
                                            </div>
                                            :
                                            <></>
                                    }
                                </div>

                            )
                        })
                    }
                </div >
                :
                <></>
        )
    }

    return (

        <div className='w-full p-4 min-h-0 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800' >
            {
                (answers.length == 0) ?
                    <div className='h-full flex justify-center items-center text-gray-600 font-bold'>Loading...</div>
                    :
                    <>
                        <div className='text-sm text-gray-600 mb-1'>Question</div>
                        <div className='font-bold mb-3'>{questions}</div>
                        <div className='text-sm text-gray-600 mb-1'>Options</div>
                        {createOptions(options)}
                    </>
            }

        </div>
    )
}

export default QuestionCard
