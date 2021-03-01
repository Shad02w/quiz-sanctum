import { backendApiAxios, CandidateGetResponse, DataBaseRecord } from '@models/Api'
import React, { useEffect, useState } from 'react'
import { Candidate } from '@models/Data'

interface CandidateProps {

}

const Candidates = (props: CandidateProps) => {
    const [candidates, setCandidates] = useState<DataBaseRecord<Candidate>[]>([])
    const updateCandidates = async () => {
        try {
            const res = await backendApiAxios.get('/candidates')
            const data = res.data as CandidateGetResponse
            setCandidates(data.items)
        } catch (error) {
            if (error.response)
                console.error(error.response.data.title)
        }
    }

    useEffect(() => {
        updateCandidates()
    }, [])


    return (
        <h1>hi</h1>
    )
}

export default Candidates
