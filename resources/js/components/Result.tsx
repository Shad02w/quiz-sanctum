import { ApiResquest } from '@models/Api'
import React from 'react'

interface ResultProps {

}

const Result = (props: ResultProps) => {
    const sendMail = async () => {
        const res = await ApiResquest('POST', '/mail', { email: 'alvistse@outlook.com' });
        console.log('res', res)
    }
    return (
        <div>
            <p className='mb-2'>You can manually send email to candidates hear</p>
            <button className='btn-red' onClick={sendMail}>Send Email</button>
        </div>
    )
}

export default Result
