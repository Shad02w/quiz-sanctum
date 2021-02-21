import React, { useEffect, useMemo, useState } from 'react'
import validate from 'validate.js'


interface OptionInputProps {
    onChange: (label: string, content: string, answer: boolean, validated: boolean) => any
    showValidateMessage: boolean
}


const OptionInput = (props: OptionInputProps) => {
    const { onChange, showValidateMessage } = props
    const [label, setLabel] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [answer, setAnswer] = useState<boolean>(false)

    const validatedMessage = useMemo(() => {
        return validate({ label, content, answer }, {
            label: {
                presence: { allowEmpty: false },
                type: 'string'
            },
            content: {
                presence: { allowEmpty: false },
                type: 'string'
            },
            answer: {
                presence: true,
                type: 'boolean'
            }
        })
    }, [label, content, answer])

    const validated = useMemo(() => validatedMessage === undefined, [validatedMessage])

    useEffect(() => {
        if (onChange) onChange(label, content, answer, validated)
    }, [label, content, answer])

    return (
        <div className='grid grid-flow-row gap-3 md:flex md:flex-row mt-4 md:items-center'>
            <div>
                <label>
                    <div className='flex flex-row justify-between'>
                        <div className='invisible'>C</div>
                    </div>
                    <div className='flex justify-center items-center h-10'>
                        <input
                            checked={answer}
                            onChange={(e) => setAnswer(e.currentTarget.checked)}
                            type='checkbox'
                            className='w-6 h-6'
                        />
                    </div>
                </label>
            </div>
            <label>
                <div className='flex flex-row justify-between'>
                    <div>label</div>
                    <div className='text-sm text-red-600'>{(showValidateMessage && validatedMessage && validatedMessage.label) ? validatedMessage.label.join(',') : ''}</div>
                </div>
                <input
                    name='label'
                    className='h-10 bg-gray-50 dark:bg-gray-900 rounded-md px-2 py-1'
                    onChange={(e) => setLabel(e.currentTarget.value)}
                    value={label}
                    type='text' placeholder={'label'} />
            </label>
            <label className='w-full'>
                <div className='flex flex-row justify-between'>
                    <div>Content</div>
                    <div className='text-sm text-red-600'>{(showValidateMessage && validatedMessage && validatedMessage.content) ? validatedMessage.content.join(',') : ''}</div>
                </div>
                <input
                    name='text'
                    onChange={(e) => setContent(e.currentTarget.value)}
                    className='h-10 w-full bg-gray-50 dark:bg-gray-900 rounded-md px-2 py-1'
                    value={content}
                    type='text' placeholder={'text'} />
            </label>
        </div>
    )
}

export default OptionInput
