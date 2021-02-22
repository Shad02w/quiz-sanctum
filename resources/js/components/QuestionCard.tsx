import { AnswerGetResponse, ApiResponseBase, ApiResquest, DataBaseRecord, DatabaseRecordBase, OptionGetResponse } from '@models/Api'
import { Answer, Option } from '@models/Data'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

interface QuestionCardProps {
    question: string,
    questionId: number
    onEdit?: () => any
    onDelete?: () => any
}

const QuestionCard = (props: QuestionCardProps) => {
    const { question: questions, questionId, onEdit, onDelete } = props
    const [options, setOptions] = useState<DataBaseRecord<Option>[]>([])
    const [answers, setAnswers] = useState<DataBaseRecord<Answer>[]>([])

    const handleDelete = async () => {
        const res = await ApiResquest<ApiResponseBase>('DELETE', `/questions/${questionId}`)
        if (!res || res.type === 'failed') return
        if (onDelete) onDelete()
    }



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

    const createOptions = (options: (Option & DatabaseRecordBase)[]) => {
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
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <div className='text-gray-600 mb-2'>Question</div>
                            <div className='font-bold mb-3'>{questions}</div>
                            <div className='text-gray-600 mb-2'>Options</div>
                            {createOptions(options)}
                        </div>
                        <div className='flex flex-row justify-end mt-2'>
                            <button
                                onClick={onEdit}
                                className='btn-icon text-gray-800 dark:text-gray-400 p-3'>
                                <FaEdit className='fill-current w-5 h-5' />
                            </button>
                            <button
                                onClick={handleDelete}
                                className='btn-icon text-gray-800 dark:text-gray-400 p-3'>
                                <AiFillDelete className='fill-current w-5 h-5' />
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default QuestionCard
