import { ApiResponse, ApiResquest, QuestionGetResponse } from '@models/Api'
import { Question } from '@models/Data'
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import QuestionModal from './modals/QuestionModal'
import QuestionCard from './QuestionCard'


const Questions = () => {
    const [showModal, setShowModal] = useState(false)
    const [questions, setQuesions] = useState<ApiResponse<Question>[]>([])

    const updateQuestions = async () => {
        try {
            const questionRes = await ApiResquest<QuestionGetResponse>('GET', '/questions')
            if (!questionRes || questionRes.type === 'failed') return
            setQuesions(questionRes.data.items)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        updateQuestions()
    }, [])

    const handleCreateSuccess = () => {
        updateQuestions()
        alert('Successfully Added')
    }

    const handleOnDelete = () => {
        updateQuestions()
        alert('Successfully Deleted')
    }

    return (
        <div>
            <p className='text-2xl mb-3'>Questions</p>
            <p className='text-base dark:text-gray-600 md:mb-5'>You can create, update and delete questions in this page</p>
            <button
                className='p-2 shadow-xl md:shadow-none flex flex-row justify-center items-center fixed bottom-14 right-6 md:static focus:outline-none
            text-white flex-rwo rounded-lg bg-rose-700 hover:bg-rose-600'
                onClick={() => setShowModal(true)}
            >
                <IoMdAdd className='fill-current w-7 h-7 md:w-5 md:h-5' />
                <div className='ml-1 text-base hidden md:block'>New Question</div>
            </button>
            <div className='w-full mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                {questions.map((item, i) => {
                    return <QuestionCard key={i}
                        onDelete={handleOnDelete}
                        question={item.question}
                        questionId={item.id}
                    />
                })}
            </div>
            <QuestionModal
                show={showModal}
                title={'Create New Question'}
                onSuccess={handleCreateSuccess}
                onClose={() => setShowModal(false)}
            />
        </div >
    )
}

export default Questions
