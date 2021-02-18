import React, { PropsWithChildren } from 'react'

export interface ModalProps {
    show: boolean,
    className?: string
    onClose?: () => any

}
// style={{ backdropFilter: 'blur(2px)' }}
const Modal = (props: PropsWithChildren<ModalProps>) => {
    const { show, onClose, children, className } = props
    return (
        show
            ?
            <div
                onMouseDown={onClose}
                className='fixed z-10 inset-0 overflow-y-auto'>
                <div
                    className='flex items-center justify-center min-h-screen bg-opacity-70 bg-gray-800 dark:bg-black dark:bg-opacity-70'>
                    <div className={className}
                        onMouseDown={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
            :
            <></>
    )
}

export default Modal
