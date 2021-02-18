import axios, { Method } from 'axios'

export type InvalidParamsResponse = {
    [key: string]: any
}

export interface ApiResponse {
    title: string
    status: number
}

export interface QuestionPostResponse extends ApiResponse {

}

export interface QuestionGetResponseItem {
    id: number
    question: string
    created_at: string
    updated_at: string,
    answer_id: number
}

export interface QuestionGetResponse extends ApiResponse {
    items: QuestionGetResponseItem[]
}

export interface ApiResponseWithInvalidParams {
    invalidParams: InvalidParamsResponse
}


export type PostResponse<T, K> = {
    type: 'success', data: T
} |
{
    type: 'failed', data: K
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

export const isSuccessResponse = (code: number) => (code > 200) && (code < 300)


export const getCSRFToken = () => {
    const tokenTag = Array.from(document.getElementsByTagName('meta'))
        .find(el => el.name === 'csrf-token')
    if (!tokenTag) return undefined
    return tokenTag.content
}



export const ApiResquest = async function <T = any, K = any>(method: Method, resource: string, data?: any) {
    try {
        const res = await backendApiAxios({
            method,
            url: resource,
            data
        })
        return { type: 'success', data: res.data as T } as PostResponse<T, K>
    } catch (error) {
        console.error(error.response || error)
        if (error.response)
            return { type: 'failed', data: error.response.data as K } as PostResponse<T, K>
        return undefined
    }

}

