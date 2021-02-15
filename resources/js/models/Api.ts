import axios, { AxiosRequestConfig } from 'axios'

export interface ApiResponse {
    title: string
    status: number
}

export interface LogoutResponse extends ApiResponse { }


const url = 'http://localhost:8000/api'

export const getCSRFToken = () => {
    const tokenTag = Array.from(document.getElementsByTagName('meta'))
        .find(el => el.name === 'csrf-token')
    if (!tokenTag) return undefined
    return tokenTag.content
}

export const logout = async () => {
    try {
        const res = await axios.post(`${url}/logout`)
        return res.data as ApiResponse
    } catch (error) {
        if (error.response)
            return error.response.data as ApiResponse
        return undefined
    }
}

export const addQuestion = async (question: string) => {
    try {
        const res = await axios.post(`${url}/questions`, { question }, {
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log('add question res', res)
        return res.data
    } catch (error) {
        console.error(error.response.data || error)
        return undefined
    }
}
