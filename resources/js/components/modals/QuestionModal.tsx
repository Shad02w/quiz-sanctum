import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Modal, { ModalProps } from '@components/Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { Answer, Option, Question } from '@models/Data'
import { ApiResquest, InvalidParamsResponse, ApiResponseWithInvalidParams, QuestionPostResponse, getFullQuestionSetById } from '@models/Api'
import OptionInput from './OptionInput'
import { validate } from 'validate.js'



interface QuestionModalProps extends ModalProps {
    title: string
    questionId?: number
    onSuccess?: () => any
}

const QuestionModal = (props: QuestionModalProps) => {
    const { show, onClose, title, onSuccess, questionId } = props
    const [question, setQuestion] = useState<string>('');
    const [options, setOptions] = useState<{ label: string, content: string, answer: boolean }[]>([]);
    const [optionsValidated, setOptionsValidated] = useState(false)
    const [showValidateMessage, setShowValidateMessage] = useState(false)
    const answers = useMemo(() => {
        return options.map((option, index) => {
            if (option.answer) return index
            else return undefined
        }).filter(answer => answer !== undefined) as number[]
    }, [options])

    const addOption = () => setOptions(pre => [...pre, { label: '', content: '', answer: false }])

    const removeOption = (index: number) => {
        const newOptions = options.filter((_, i) => i !== index)
        setOptions(newOptions)
    }


    const clear = () => {
        setOptions([])
        setQuestion('')
        setShowValidateMessage(false)
    }

    const handleOptionsOnChange = (index: number) => (label: string, content: string, answer: boolean, validated: boolean) => {
        setOptions(pre => {
            const newOptions = [...pre]
            newOptions[index].label = label
            newOptions[index].content = content
            newOptions[index].answer = answer
            return newOptions
        })
        setOptionsValidated(validated)
    }

    const handleClose = useCallback(() => {
        clear()
        if (onClose) onClose()
    }, [onClose])

    const validatedMessage = useMemo(() => {
        return validate({ question, options, answers }, {
            question: {
                presence: { allowEmpty: false },
                type: 'string',
            },
            options: {
                length: { minimum: 2, message: '^Should provide more than one options' },
                type: 'array',
            },
            answers: {
                length: function (_: any, attributes: any) {
                    if (attributes.options.length < 1)
                        return true
                    else
                        return { minimum: 1, message: '^Should have at least one answer' }
                },
                type: 'array'
            }
        })
    }, [question, options, answers])

    const questionValidated = useMemo(() => validatedMessage === undefined, [validatedMessage])


    const addQuestion = useCallback(async () => {
        if (questionValidated && optionsValidated) {
            const res = await ApiResquest<QuestionPostResponse, ApiResponseWithInvalidParams>('POST', '/questions', { question, options, answers })
            if (!res) return;
            if (res.type === 'failed') console.error(res.data.invalidParams)
            else {
                if (onSuccess) onSuccess()
                handleClose()
            }
        }
        else {
            setShowValidateMessage(true)
        }
    }, [question, options])

    useEffect(() => {
        if (questionValidated && optionsValidated) {
            setShowValidateMessage(false)
        }
    }, [questionValidated, optionsValidated])


    const createTitle = () => {
        return (
            <section
                className='flex flex-row justify-between items-center p-4 md:p-4 mb-2 sticky top-0 bg-gray-100 dark:bg-gray-800 pt-4 shadow-sm'
                aria-label='modal header'>
                <div className='text-lg font-bold'>
                    {title}
                </div>
                <div
                    className='cursor-pointer p-1 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md'
                    onClick={handleClose}
                >
                    <IoCloseSharp
                        className='w-6 h-6 fill-current' />
                </div>
            </section>
        )

    }


    return (
        <Modal
            show={show}
            className='bg-gray-100 dark:bg-gray-800 shadow-lg
                md:static md:w-4/5 lg:w-2/5 md:h-5/6 md:rounded-lg
                absolute bottom-0 h-2/3 w-full overflow-hidden'
            onClose={handleClose}
        >
            <div className='min-h-full flex flex-col justify-between max-h-full'>
                <div className='overflow-y-auto max-h-full'>
                    {createTitle()}
                    <section className='p-4 md:p-4 mb-2'>
                        <label>
                            <div className='mb-2 pl-1 flex flex-row justify-between'>
                                <div className=' text-gray-800 dark:text-gray-300 text-lg'>Question</div>
                                <div className='text-sm text-red-600'>{(showValidateMessage && validatedMessage && validatedMessage.question) ? validatedMessage.question.join(',') : ''}</div>
                            </div>
                            <textarea
                                name='question'
                                id='question-text'
                                placeholder={'Enter your question here'}
                                value={question}
                                onChange={(e) => setQuestion(e.currentTarget.value)}
                                className=' bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-md px-3 py-2 h-32 w-full focus:outline-none' />
                        </label>
                        <div className='mt-2'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className='text-gray-800 dark:text-gray-300 text-lg'>Options</div>
                                <div className='flex flex-row items-center'>
                                    <div className='text-sm text-red-600 mr-3'>{(showValidateMessage && validatedMessage && validatedMessage.options) ? validatedMessage.options.join(',') : ''}</div>
                                    <button
                                        onClick={addOption}
                                        className='btn-red h-10 w-20'>
                                        Add
                                    </button>
                                </div>
                            </div>
                            {
                                options.map((_, index) => <OptionInput
                                    key={index}
                                    showValidateMessage={showValidateMessage}
                                    onChange={handleOptionsOnChange(index)}
                                />)
                            }
                            <div className='text-sm text-red-600'>{(showValidateMessage && validatedMessage && validatedMessage.answers) ? validatedMessage.answers.join(',') : ''}</div>
                        </div>
                    </section>
                </div>
                <div className='p-4 bg-gray-50 dark:bg-gray-900 flex flex-row items-center'>
                    <button
                        onClick={addQuestion}
                        className='btn-red h-10 items-center mr-2'
                    >
                        Confirm
                    </button>
                    <button
                        onClick={clear}
                        className='btn-red-none h-10 items-center'
                    >
                        Clear
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default QuestionModal

    // <div className='h-full flex flex-col justify-between'>
    //     {createTitle()}
    //     <div className='flex flex-col justify-center h-full w-full items-center'>
    //         <div className='flex justify-center items-center rounded-full text-rose-700 border border-rose-700 w-12 h-12'>
    //             <AiOutlineCheck className='fill-current w-10 h-auto text-lg' />
    //         </div>
    //         <div className='font-bold'>Success</div>
    //     </div>
    // </div>