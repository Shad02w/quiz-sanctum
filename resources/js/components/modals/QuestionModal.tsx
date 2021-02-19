import React, { useCallback, useState } from 'react'
import Modal, { ModalProps } from '@components/Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { Option } from '@models/Data'
import { ApiResquest, InvalidParamsResponse, ApiResponseWithInvalidParams, QuestionPostResponse } from '@models/Api'
import { AiOutlineCheck } from 'react-icons/ai'



interface QuestionModalProps extends ModalProps {
    question?: string
    options?: { label: string, content: string }[]
    title: string
    onSuccess?: () => any
}


const QuestionModal = (props: QuestionModalProps) => {
    const { show, onClose, question: initQuestion, options: initOptions, title, onSuccess } = props
    const [question, setQuestion] = useState(initQuestion || '');
    const [options, setOptions] = useState(initOptions || []);
    const [answer, setAnswer] = useState<number | undefined>(undefined)
    const [invalidParams, setInvalidParams] = useState<InvalidParamsResponse | undefined>(undefined)

    const addOption = () => setOptions(pre => [...pre, { label: '', content: '' }])

    const removeOption = (index: number) => {
        const newOptions = options.filter((_, i) => i !== index)
        setOptions(newOptions)
    }

    const clear = () => {
        setOptions([])
        setQuestion('')
        setInvalidParams(undefined)
    }

    const handleOptionsOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, lable: boolean) => {
        const newOptions = [...options]
        if (lable)
            newOptions[index].label = e.currentTarget.value
        else
            newOptions[index].content = e.currentTarget.value
        setOptions(newOptions)
    }
    const handleAnswerOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const checked = e.currentTarget.checked
        if (checked)
            setAnswer(index)
        else
            setAnswer(undefined)
    }

    const handleClose = useCallback(() => {
        clear()
        if (onClose) onClose()
    }, [onClose])



    const addQuestion = useCallback(async () => {
        const res = await ApiResquest<QuestionPostResponse, ApiResponseWithInvalidParams>('POST', '/questions', { question, options, answer })
        if (!res) return;
        if (res.type === 'failed') setInvalidParams(res.data.invalidParams)
        else {
            if (onSuccess) onSuccess()
            handleClose()
        }
    }, [question, options, answer])


    const createOptions = () => {
        return (
            <div className='mt-2'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='text-gray-800 dark:text-gray-300 text-lg'>Options</div>
                    <button
                        onClick={addOption}
                        className='btn-red h-10 w-20'>
                        Add
                    </button>
                </div>
                {
                    options.length === 0
                        ?
                        <div className='text-gray-400 dark:text-gray-600 text-sm mb-2'>You can add options for the question</div>
                        :
                        options.map((option, index) => {
                            return (
                                <div className='grid grid-flow-row gap-2 md:flex md:flex-row mt-4 md:items-center' key={index}>
                                    <input
                                        checked={answer === index}
                                        onChange={(e) => handleAnswerOnChange(e, index)}
                                        type='checkbox' className='w-7 h-7 mr-2 rounded-lg'
                                    />
                                    <input
                                        name='label'
                                        className='h-10 bg-gray-50 dark:bg-gray-900 rounded-md mr-2 px-2 py-1'
                                        onChange={(e) => handleOptionsOnChange(e, index, true)}
                                        value={option.label}
                                        type='text' placeholder={'label'} />
                                    <input
                                        name='text'
                                        onChange={(e) => handleOptionsOnChange(e, index, false)}
                                        className='h-10 w-full bg-gray-50 dark:bg-gray-900 rounded-md mr-2 px-2 py-1'
                                        value={option.content}
                                        type='text' placeholder={'text'} />
                                    <button
                                        onClick={() => removeOption(index)}
                                        className='btn-red h-10 w-20'>
                                        Delete
                                        </button>
                                </div>
                            )

                        })
                }
            </div>
        )
    }

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

    // <div className='h-full flex flex-col justify-between'>
    //     {createTitle()}
    //     <div className='flex flex-col justify-center h-full w-full items-center'>
    //         <div className='flex justify-center items-center rounded-full text-rose-700 border border-rose-700 w-12 h-12'>
    //             <AiOutlineCheck className='fill-current w-10 h-auto text-lg' />
    //         </div>
    //         <div className='font-bold'>Success</div>
    //     </div>
    // </div>

    return (
        <Modal
            show={show}
            className='bg-gray-100 dark:bg-gray-800 shadow-lg
                md:static md:w-4/5 lg:w-2/3 md:h-5/6 md:rounded-lg
                absolute bottom-0 h-2/3 w-full overflow-hidden'
            onClose={handleClose}
        >
            <div className='min-h-full flex flex-col justify-between max-h-full'>
                <div className='overflow-y-auto max-h-full'>
                    {createTitle()}
                    <section className='p-4 md:p-4 mb-2'>
                        <label className='block mb-2 pl-1 text-gray-800 dark:text-gray-300 text-lg ' htmlFor="question-text">Question</label>
                        <textarea
                            name='question'
                            id='question-text'
                            placeholder={'Enter your question here'}
                            value={question}
                            onChange={(e) => setQuestion(e.currentTarget.value)}
                            className=' bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-md px-3 py-2 h-32 w-full focus:outline-none' />
                        <div className='text-sm text-red-600'>{(invalidParams && invalidParams.question) ? invalidParams.question.join(',') : ''}</div>
                        {createOptions()}
                        <div className='text-sm text-red-600'>{(invalidParams && invalidParams.options) ? invalidParams.options.join(',') : ''}</div>
                        <div className='text-sm text-red-600'>{(invalidParams && invalidParams.answer) ? invalidParams.answer.join(',') : ''}</div>
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
