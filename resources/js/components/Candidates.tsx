import { ApiResponseBase, backendApiAxios, CandidateGetResponse, DataBaseRecord } from '@models/Api'
import React, { useEffect, useState } from 'react'
import { Table, Thead, Tr, Th, Tbody, Td, Badge } from '@chakra-ui/react'
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

    const createStateBadge = (state: string) => {
        if (state.toLowerCase() === 'finished') {
            return <Badge colorScheme='green'>Finished</Badge>
        }
        else if (state.toLowerCase() === 'interrupt') {
            return <Badge colorScheme='red'>Interrupt</Badge>
        }
        else if (state.toLowerCase() === 'process') {
            return <Badge colorScheme='purple'>Interrupt</Badge>
        }
        else
            return <Badge>{state}</Badge>

    }

    return (
        <div className='pb-5 max-w-full overflow-x-hidden'>
            <div className='md:hidden text-2xl mb-6'>Candidates</div>
            <div className='p-3 overflow-x-auto' >
                <Table variant='unstyled' className='rounded-md'>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>State</Th>
                            <Th>Date</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            candidates.map(candidate => {
                                return (
                                    <Tr key={candidate.id} className='border-b-2 border-gray-200 dark:border-gray-800'>
                                        <Td>{candidate.email}</Td>
                                        <Td>{createStateBadge(candidate.state)}</Td>
                                        <Td>{candidate.created_at}</Td>
                                        <Td>
                                            <div>
                                                <button className='btn-red px-2 h-10'>Delete</button>
                                            </div>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>

                </Table>
            </div>
        </div>
    )
}

export default Candidates
