import { Option } from '@models/Data'
import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import QuestionModal from './modals/QuestionModal'
import QuestionCard from './QuestionCard'

interface Props {

}

const Questions = (props: Props) => {
    const question = 'What is the biggest animal?'
    const [showModal, setShowModal] = useState(true)
    const option: Option = {
        label: 'A',
        text: 'Human'
    }
    return (
        <div>
            <p className='text-2xl mb-3'>Questions</p>
            <p className='text-base dark:text-gray-600 md:mb-5'>You can create, update and delete questions in this page</p>
            <button
                className='p-2 shadow-md md:shadow-none flex flex-row justify-center items-center fixed bottom-14 right-6 md:static focus:outline-none
            text-white flex-rwo rounded-lg bg-rose-700 hover:bg-rose-600'
                // onClick={() => addQuestion('What is that?')}
                onClick={() => setShowModal(true)}
            >
                <IoMdAdd className='fill-current w-7 h-7 md:w-5 md:h-5' />
                <div className='ml-1 text-base hidden md:block'>New Question</div>
            </button>
            <div className='w-full mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                <QuestionCard question={question} options={[option, option, option, option]} answer={'A'} />
                <QuestionCard question={question} options={[option, option, option, option]} answer={'A'} />
            </div>
            <QuestionModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </div >
    )
}

export default Questions
