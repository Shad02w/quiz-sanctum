import React, { useState } from 'react'
import Modal, { ModalProps } from '@components/Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { Option } from '@models/Data'

interface QuestionModalProps extends ModalProps {
    question?: string
    options?: Option[]

}

const QuestionModal = (props: QuestionModalProps) => {
    const { show, onClose, question: initQuestion, options: initOptions } = props
    const [question, setQuestion] = useState(initQuestion || '');
    const [options, setOptions] = useState(initOptions || []);

    const addOption = () => setOptions(pre => [...pre, { label: '', text: '' }])
    const removeOption = (index: number) => setOptions(pre => pre.filter((_, i) => i !== index))


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
                        <div className='text-gray-800 dark:text-gray-600 text-sm mb-2'>You can add options for the question</div>
                        :
                        options.map((option, index) => {
                            return (
                                <div className='flex flex-row mt-4' key={index}>
                                    <input
                                        className='h-10 bg-gray-50 dark:bg-gray-900 rounded-md mr-2 px-2 py-1'
                                        type='text' placeholder={'label'} defaultValue={option.label ? option.label : ''} />
                                    <input
                                        className='h-10 w-full bg-gray-50 dark:bg-gray-900 rounded-md mr-2 px-2 py-1'
                                        type='text' placeholder={'text'} defaultValue={option.text ? option.text : ''} />
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

    return (
        <Modal
            show={show}
            className='bg-gray-100 dark:bg-gray-800 shadow-lg
                md:static md:w-4/5 lg:w-2/3 md:h-4/6 md:rounded-lg
                absolute bottom-0 h-2/3 w-full overflow-hidden'
            onClose={onClose}
        >
            <div>
                <div className='p-4'>
                    <section
                        className='flex flex-row justify-between items-center py-2 mb-2'
                        aria-label='modal header'>
                        <div className='text-lg font-bold'>
                            Create New Question Set
                        </div>
                        <div
                            className='cursor-pointer p-1 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md'
                            onClick={onClose}>
                            <IoCloseSharp
                                className='w-6 h-6 fill-current' />
                        </div>
                    </section>
                    <section className='pt-3 mb-2'>
                        <label className='block mb-2 pl-1 text-gray-800 dark:text-gray-300 text-lg ' htmlFor="question-text">Question</label>
                        <textarea
                            id='question-text'
                            placeholder={'Enter your question here'}
                            defaultValue={question}
                            className=' bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-md px-3 py-2 h-32 w-full focus:outline-none' />
                        {createOptions()}
                    </section>
                </div>
                <div className='p-4 bg-gray-50 dark:bg-gray-900 flex-row items-center'>
                    <button
                        className='btn-red h-10 items-center'>Confirm</button>
                </div>
            </div>
        </Modal>
    )
}

export default QuestionModal
