import axios from 'axios'

export interface ApiResponse {
    title: string
    status: number
}



const host = 'http://localhost:8000'
const url = `${host}/api`

export const backendApiAxios = axios.create({
    baseURL: url,
    headers: {
        headers: {
            'Accept': 'application/json'
        }
    }
})

export interface LogoutResponse extends ApiResponse { }



export const getCSRFToken = () => {
    const tokenTag = Array.from(document.getElementsByTagName('meta'))
        .find(el => el.name === 'csrf-token')
    if (!tokenTag) return undefined
    return tokenTag.content
}

export const logout = async () => {
    try {
        const res = await axios.post(`${host}/logout`)
        console.log(res)
        return res.data as ApiResponse
    } catch (error) {
        if (error.response)
            return error.response.data as ApiResponse
        return undefined
    }
}

export const postQuestion = async (question: string) => {
    try {
        const res = await backendApiAxios.post('/questions', { question })
        console.log('add question res', res.data)
        return res.data
    } catch (error) {
        console.error(error.response.data || error)
        return undefined
    }
}
